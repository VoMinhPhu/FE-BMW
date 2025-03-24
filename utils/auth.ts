"use client";

import { getProfileFn, loginFn, registerFn } from "@/app/api/auth/auth";
import { LoginResponse } from "@/type/auth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const useLogin = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: loginFn,
    onSuccess: async (data) => {
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("isLogin", "true");
      queryClient.invalidateQueries({ queryKey: ["user"] });
      setTimeout(() => router.push("/"), 500);
    },
  });
};

const useRegister = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: registerFn,
    onSuccess: (data) => {
      //   localStorage.setItem("token", data.access_token);
      console.log("data", data);
      queryClient.invalidateQueries({ queryKey: ["user"] });
      setTimeout(() => router.push("/"), 500);
    },
  });
};

const useGetProfile = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: getProfileFn,
    staleTime: 1000 * 60 * 10,
  });
};

export { useLogin, useRegister, useGetProfile };
