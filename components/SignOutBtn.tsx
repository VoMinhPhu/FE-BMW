"use client";

import { logout } from "@/lib/actions/auth";

const SignOutBtn = () => {
  return (
    <button
      onClick={() => logout()}
      className="border px-4 py-2 rounded hover:bg-slate-200 w-full mt-2"
    >
      Sign Out
    </button>
  );
};

export default SignOutBtn;
