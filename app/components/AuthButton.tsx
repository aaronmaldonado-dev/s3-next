"use client";
import { signIn, signOut, useSession } from "next-auth/react";

function AuthButton() {
  const { data, status } = useSession();

  const handleSignIn = async () => {
    await signIn("cognito");
  };

  const handleSignOut = async () => {
    await signOut();
  };

  if (status === "unauthenticated") {
    return (
      <button className="btn btn-sm btn-outline btn-info" onClick={handleSignIn}>
        Sign in
      </button>
    );
  }

  return (
    <>
      <button className="btn btn-sm btn-outline btn-error" onClick={handleSignOut}>
        Sign out
      </button>
    </>
  );
}

export default AuthButton;
