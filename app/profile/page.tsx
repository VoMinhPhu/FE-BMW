"use client";
import { useGetProfile } from "@/utils/auth";
import { useEffect } from "react";

const page = () => {
  const { data, isSuccess } = useGetProfile();
  useEffect(() => {
    if (isSuccess) {
      console.log("data", data);
    }
  });

  return <div>page</div>;
};

export default page;
