"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const MenuInHeader = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const isLogin = localStorage.getItem("isLogin");

  const LogoutFn = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("token");
  };

  if (isLogin === "true") {
    return (
      <div
        onClick={() => setOpenMenu(!openMenu)}
        className="relative h-full flex items-center"
      >
        <Image
          src="/avt.png"
          alt="avt"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div
          className={`absolute top-full right-0 border w-44 p-4 bg-white rounded-md shadow-md ${
            openMenu ? "block" : "hidden"
          }`}
        >
          <p className="w-full font-semibold text-center">Username</p>
          <button
            onClick={LogoutFn}
            className="border px-4 py-2 rounded hover:bg-slate-200 w-full mt-2"
          >
            Logout
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Link
          href="/login"
          className="border px-4 py-2 rounded bg-slate-500 hover:bg-slate-400 text-white"
        >
          Login
        </Link>
      </div>
    );
  }
};

export default MenuInHeader;
