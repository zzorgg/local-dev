import { useNavigate } from "react-router";
import { SignUpAuthScreen } from "@/components/sign-up-auth-screen";

export default function SignupPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-svh flex items-center justify-center p-6 bg-background">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="hidden md:flex flex-col gap-4">
          <h1 className="text-4xl font-extrabold">Welcome to Allies</h1>
          <p className="text-muted-foreground">
            Create an account to get started. Secure authentication powered by
            Firebase — fast, simple, and reliable.
          </p>
          <div className="mt-4 rounded-lg bg-linear-to-br from-indigo-600 to-purple-600 p-6 text-white">
            <p className="font-medium">Protected by Firebase</p>
            <p className="text-sm opacity-90">
              Login, sign up, and manage sessions effortlessly.
            </p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm">
          <SignUpAuthScreen
            onSignUp={() => navigate("/login")}
            onSignInClick={() => navigate("/login")}
          />
        </div>
      </div>
    </div>
  );
}
