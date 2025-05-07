"use server";

import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import SignOutBtn from "./SignOutBtn";
import MenuInHeader from "./MenuInHeader";

const Header = async () => {
  const session = await auth();
  if (session?.user) {
    return (
      <div className="h-14 flex items-center justify-between px-5 border fixed top-0 w-full">
        <Link href="/">BẢO MẬT WEB</Link>
        <div className="flex items-center h-full relative group">
          {session.user.image && (
            <Image
              className="rounded-full"
              src={session.user.image}
              alt={session.user.name || ""}
              width={40}
              height={40}
            />
          )}
          <div className="hidden group-hover:block absolute top-full p-4 bg-white rounded-md shadow-md right-0 w-44 border">
            <p className="w-full font-semibold text-center">
              {session.user.name}
            </p>
            <SignOutBtn />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="h-14 flex items-center justify-between border px-5 fixed top-0 w-full">
      <Link href="/">BẢO MẬT WEB</Link>
      <MenuInHeader />
    </div>
  );
};

export default Header;
