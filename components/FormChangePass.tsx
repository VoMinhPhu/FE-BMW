"use client";

import { useChangePassword } from "@/utils/auth";
import { Resolver, useForm } from "react-hook-form";

type ChangePassForm = {
  oldPassword: string;
  newPassword: string;
};

const resolver: Resolver<ChangePassForm> = async (values) => {
  const errors: Record<string, any> = {};

  if (!values.oldPassword) {
    errors.oldPassword = {
      type: "required",
      message: "Old password is required",
    };
  }
  if (!values.newPassword) {
    errors.newPassword = {
      type: "required",
      message: "New password is required",
    };
  }

  return {
    values: Object.keys(errors).length ? {} : values,
    errors,
  };
};

const FormChangePass = () => {
  const { mutate: changePassFn } = useChangePassword();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ChangePassForm>({ resolver });

  const onSubmit = handleSubmit((data) => {
    changePassFn(data);
    reset();
  });

  return (
    <div className="p-10">
      <p className="font-bold text-2xl mb-6">Change password</p>
      <form onSubmit={onSubmit}>
        <p className="font-semibold">OldPassword</p>
        <input
          className="w-full border my-2 p-2 rounded"
          {...register("oldPassword")}
          placeholder="Enter your oldPassword..."
        />
        {errors?.oldPassword && (
          <p className="text-red-500">{errors.oldPassword.message}</p>
        )}

        <p className="font-semibold">NewPassword</p>
        <input
          className="w-full border my-2 p-2 rounded"
          {...register("newPassword")}
          placeholder="Enter your newPassword..."
        />

        <button
          type="submit"
          className="w-full border bg-slate-500 hover:bg-slate-400 text-white py-2 rounded mt-10"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default FormChangePass;
