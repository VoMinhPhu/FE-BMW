"use client";

import { login } from "@/lib/actions/auth";

const SignInBtn = () => {
  return (
    <button
      onClick={() => login()}
      className="border px-4 py-2 rounded hover:bg-slate-200"
    >
      Login with google
    </button>
  );
};

export default SignInBtn;
