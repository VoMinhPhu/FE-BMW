"use server";

import { auth } from "@/auth";
import SignInBtn from "@/components/SignInBtn";
import SignOutBtn from "@/components/SignOutBtn";
import Image from "next/image";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    return (
      <div>
        <div className="h-14 flex items-center justify-between px-5 border">
          <div>LOGO</div>
          <div>
            <p>{session.user.name}</p>
            {session.user.image && (
              <Image
                className="rounded-full"
                src={session.user.image}
                alt={session.user.name || ""}
                width={40}
                height={40}
              />
            )}
          </div>
        </div>
        <div className="flex items-center justify-center p-10">
          <SignOutBtn />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="h-14 flex items-center justify-center border">Header</div>
      <div className="flex items-center justify-center p-10">
        <SignInBtn />
      </div>
    </div>
  );
}
