import { useNavigate } from "react-router";
import { FacebookSignInButton } from "@/components/facebook-sign-in-button";
import { GoogleSignInButton } from "@/components/google-sign-in-button";
import { SignInAuthScreen } from "@/components/sign-in-auth-screen";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-svh flex items-center justify-center p-6">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="hidden md:flex flex-col gap-4">
          <h2 className="text-3xl font-bold">Welcome back</h2>
          <p className="text-muted-foreground">Sign in to continue to Allies</p>
          <div className="mt-4 rounded-lg bg-linear-to-br from-emerald-500 to-teal-500 p-6 text-white">
            <p className="font-medium">Fast & secure</p>
            <p className="text-sm opacity-90">
              Use your Google or Facebook account to sign in quickly.
            </p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm">
          <SignInAuthScreen
            onSignIn={() => navigate("/success")}
            onSignUpClick={() => navigate("/signup")}
          >
            <GoogleSignInButton />
            <FacebookSignInButton />
          </SignInAuthScreen>
        </div>
      </div>
    </div>
  );
}
