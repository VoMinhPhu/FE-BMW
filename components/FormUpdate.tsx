"use client";

import { useGetProfile, useUpdateProfile } from "@/utils/auth";
import { useEffect } from "react";
import { Resolver, useForm } from "react-hook-form";

type UpdateForm = {
  address: string;
  fullname: string;
  gender: string;
  phone: string;
};

const resolver: Resolver<UpdateForm> = async (values) => {
  const errors: Record<string, any> = {};

  return {
    values: Object.keys(errors).length ? {} : values,
    errors,
  };
};

const FormUpdate = () => {
  const { mutate: updateFn } = useUpdateProfile();

  const { data, isLoading } = useGetProfile();

  useEffect(() => {
    if (data) {
      reset({
        fullname: data.fullname,
        address: data.address,
        phone: data.phone,
        gender: data.gender,
      });
    }
  }, [data]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UpdateForm>({ resolver });

  const onSubmit = handleSubmit((data) => {
    updateFn(data);
    reset();
  });

  return (
    <div className="p-10">
      <p className="font-bold text-2xl mb-6">Update info</p>
      <form onSubmit={onSubmit}>
        <p className="font-semibold">Fullname</p>
        <input
          className="w-full border my-2 p-2 rounded"
          {...register("fullname")}
          placeholder="Enter your fullname..."
        />
        {errors?.fullname && (
          <p className="text-red-500">{errors.fullname.message}</p>
        )}

        <p className="font-semibold">Address</p>
        <input
          className="w-full border my-2 p-2 rounded"
          {...register("address")}
          placeholder="Enter your address..."
        />
        {errors?.address && (
          <p className="text-red-500">{errors.address.message}</p>
        )}

        <p className="font-semibold">Phone</p>
        <input
          className="w-full border my-2 p-2 rounded"
          {...register("phone")}
          placeholder="Enter your phone..."
          type="tel"
        />
        {errors?.phone && (
          <p className="text-red-500">{errors.phone.message}</p>
        )}

        <p className="font-semibold">Gender</p>
        <select
          {...register("gender")}
          className="w-full border my-2 p-2 rounded"
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {errors?.gender && (
          <p className="text-red-500">{errors.gender.message}</p>
        )}

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

export default FormUpdate;
