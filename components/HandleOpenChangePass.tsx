"use client";
import { useGetProfile } from "@/utils/auth";
import FormUpdate from "./FormUpdate";
import Image from "next/image";
import { useState } from "react";
import FormChangePass from "./FormChangePass";

const HandleOpenChangePass = () => {
  const { data, isLoading } = useGetProfile();
  const [opentab, setIsOpenTab] = useState(false);

  return (
    <div className="h-full w-full flex gap-4">
      <div className="w-96 border rounded p-4">
        <p className="font-bold text-2xl text-center">
          {(!isLoading && data.username) || "username"}
        </p>
        <Image
          src={"/avt.png"}
          alt="avt"
          width={56}
          height={56}
          className="mx-auto my-2"
        />
        <p className="font-bold text-2xl text-center">
          {!isLoading && data.fullname}
        </p>
        <p className="border-b-2 w-full h-0.5 mt-4"></p>
        <p
          onClick={() => setIsOpenTab(false)}
          className="text-gray-500 pl-8 cursor-pointer mt-4"
        >
          Update info
        </p>
        <p
          onClick={() => setIsOpenTab(true)}
          className="text-gray-500 pl-8 cursor-pointer mt-4"
        >
          Change password
        </p>
      </div>
      <div className="border w-full rounded">
        {opentab ? <FormChangePass /> : <FormUpdate />}
      </div>
    </div>
  );
};

export default HandleOpenChangePass;
