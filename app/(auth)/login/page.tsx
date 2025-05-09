"use client";

import Link from "next/link";
import { useLogin } from "@/utils/auth";
import SignInBtn from "@/components/SignInBtn";
import { Resolver, useForm } from "react-hook-form";
import { useEffect, useState } from "react";

type FormValues = {
  username: string;
  password: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  const errors: Record<string, any> = {};

  // Ký tự XSS nguy hiểm thường gặp
  const xssCharsRegex = /[<>\/\\'"()]/;

  // Username validation
  if (!values.username) {
    errors.username = {
      type: "required",
      message: "Username is required.",
    };
  } else if (xssCharsRegex.test(values.username)) {
    errors.username = {
      type: "xss",
      message: "Username contains invalid characters.",
    };
  }

  // Password validation
  if (!values.password) {
    errors.password = {
      type: "required",
      message: "Password is required.",
    };
  } else if (xssCharsRegex.test(values.password)) {
    errors.password = {
      type: "xss",
      message: "Password contains invalid characters.",
    };
  }

  return {
    values: Object.keys(errors).length ? {} : values,
    errors,
  };
};

// const resolver: Resolver<FormValues> = async (values) => {
//   const errors: Record<string, any> = {};

//   if (!values.username) {
//     errors.username = {
//       type: "required",
//       message: "Username is required.",
//     };
//   }

//   if (!values.password) {
//     errors.password = {
//       type: "required",
//       message: "Password is required.",
//     };
//   }

//   return {
//     values: Object.keys(errors).length ? {} : values,
//     errors,
//   };
// };

const page = () => {
  const [statusLoginErr, setStatusLoginErr] = useState(false);
  const [messLogin, setMesslogin] = useState("");
  const { mutate: loginFn, data } = useLogin();

  useEffect(() => {
    if (data?.status === 401) {
      setStatusLoginErr(true);
      setMesslogin("Username or password is incorrect!");
    } else if (data?.status === 403) {
      setStatusLoginErr(true);
      setMesslogin("Your account has been disabled!");
    } else {
      setStatusLoginErr(false);
      setMesslogin("Login success");
    }
  }, [data]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit(async (data) => {
    loginFn(data);
    reset();
  });
  return (
    <div>
      <div className="h-14 flex items-center justify-between border px-5">
        <Link href="/">BẢO MẬT WEB</Link>
        <Link
          href="/register"
          className="border px-4 py-2 rounded bg-slate-500 hover:bg-slate-400 text-white"
        >
          Register
        </Link>
      </div>
      <div className="p-10">
        <div className="w-[600px] border p-10 mx-auto rounded-lg">
          <form onSubmit={onSubmit}>
            <p className="text-[22px] font-semibold text-center pb-6">LOGIN</p>
            <p className="font-semibold ">Username</p>
            <input
              className="w-full border my-2 p-2 rounded"
              {...register("username")}
              placeholder="Enter your username"
            />
            {errors?.username && (
              <p className="text-red-500">{errors.username.message}</p>
            )}

            <p className="font-semibold ">Password</p>
            <input
              className="w-full border my-2 p-2 rounded"
              {...register("password")}
              placeholder="Enter your password"
              type="password"
            />
            {errors?.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}

            <button className="w-full border bg-slate-500 hover:bg-slate-400 text-white py-2 rounded mt-10">
              Login
            </button>
          </form>
          <div className="text-center">
            <SignInBtn />
            {statusLoginErr && (
              <p className="text-red-500 text-center mt-4">{messLogin}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
