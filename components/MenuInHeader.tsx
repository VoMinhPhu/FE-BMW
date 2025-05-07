"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const MenuInHeader = () => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  const isLogin = localStorage.getItem("isLogin");

  const LogoutFn = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("token");
    router.push("/");
  };

  if (isLogin === "true") {
    return (
      <div className="flex items-center gap-4 h-full">
        <Link
          href="/setting"
          className="hover:bg-gray-100 rounded-full p-2 cursor-pointer"
        >
          <Image
            src="setting.svg"
            alt="setting"
            width={28}
            height={28}
            className="rounded-full with-[28px] h-[28px] cursor-pointer"
          />
        </Link>
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
