import { useEffect, useState } from "react"
import { auth } from "../../init"
import { Button } from "@/components/ui/button"
import { type User } from "firebase/auth"
import { useNavigate } from "react-router"

interface DecodedJWT {
    header: Record<string, any>;
    payload: Record<string, any>;
}

const decode = (str: string): any => {
    const base64 = str.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
        atob(base64)
            .split("")
            .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
            .join("")
    );
    return JSON.parse(jsonPayload);
};

function decodeJWT(token: string | null): DecodedJWT | null {
    if (!token) return null

    try {
        const parts = token.split(".")
        if (parts.length < 2) return null

        return {
            header: decode(parts[0]),
            payload: decode(parts[1]),
        }
    } catch (error) {
        console.error("Failed to decode token:", error)
        return null
    }
}

export default function SuccessPage() {
    const [user, setUser] = useState<User | null>(null)
    const [idToken, setIdToken] = useState<string>("")
    const [decoded, setDecoded] = useState<DecodedJWT | null>(null)
    const navigate = useNavigate()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            if (!currentUser) {
                navigate("/login")
            } else {
                setUser(currentUser)
                currentUser.getIdToken().then((token: string) => {
                    setIdToken(token)
                    setDecoded(decodeJWT(token))
                })
            }
        })

        return () => unsubscribe()
    }, [navigate])

    const handleLogout = async () => {
        try {
            await auth.signOut()
            navigate("/login")
        } catch (error) {
            console.error("Logout failed", error)
        }
    }

    return (
        <div className="min-h-svh flex items-center justify-center p-6">
            <div className="w-full max-w-3xl rounded-lg border p-6 shadow space-y-6">

                <h2 className="text-xl font-semibold">
                    Welcome, {user?.displayName ?? "User"}
                </h2>

                <div>
                    <h3 className="font-medium mb-1">Raw Firebase ID Token</h3>
                    <pre className="w-full rounded bg-muted p-3 text-xs whitespace-pre-wrap break-words">{idToken || "Loading..."}</pre>
                </div>

                <div>
                    <h3 className="font-medium mb-1">Decoded Header</h3>
                    <pre className="rounded bg-muted p-3 text-xs overflow-x-auto">
                        {decoded
                            ? JSON.stringify(decoded.header, null, 2)
                            : "Loading..."}
                    </pre>
                </div>

                <div>
                    <h3 className="font-medium mb-1">Decoded Payload</h3>
                    <pre className="rounded bg-muted p-3 text-xs overflow-x-auto">
                        {decoded
                            ? JSON.stringify(decoded.payload, null, 2)
                            : "Loading..."}
                    </pre>
                </div>

                <Button onClick={handleLogout}>
                    Logout
                </Button>
            </div>
        </div>
    )
}
