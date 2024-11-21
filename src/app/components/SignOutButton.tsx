"use client";

import { signOut } from "next-auth/react";


export function SignOutButton() {
  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <button
      onClick={handleSignOut}
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
    >
      Sign Out
    </button>
  );
}
