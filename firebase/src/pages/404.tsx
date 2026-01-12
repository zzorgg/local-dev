import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-svh flex items-center justify-center p-6">
      <div className="w-full max-w-md text-center">
        <h1 className="text-6xl font-extrabold">404</h1>
        <p className="mt-2 text-muted-foreground">
          Uh oh — we can’t find that page.
        </p>
        <div className="mt-6">
          <Link
            to="/login"
            className="inline-block rounded bg-primary px-4 py-2 text-white"
          >
            Return to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
