"use client";

import {
  changePasswordFn,
  disableUserFn,
  getAllUserFn,
  getProfileFn,
  loginFn,
  registerFn,
  updateProfileFn,
} from "@/app/api/auth/auth";
import { LoginResponse } from "@/type/auth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const useLogin = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: loginFn,
    onSuccess: async (data) => {
      if (data.status !== 401 && data.status !== 403) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("isLogin", "true");
        queryClient.invalidateQueries({ queryKey: ["user"] });
        setTimeout(() => router.push("/"), 500);
      }
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
      if (data.status !== 400 && data.status !== 500) {
        queryClient.invalidateQueries({ queryKey: ["user"] });
        setTimeout(() => router.push("/login"), 500);
      }
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

const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: any) => updateProfileFn(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });
};

const useGetAllUser = () => {
  return useQuery({
    queryKey: ["allUser"],
    queryFn: getAllUserFn,
    staleTime: 1000 * 60 * 10,
  });
};

const useDisableUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: any) => disableUserFn(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allUser"] });
    },
  });
};

const useChangePassword = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: any) => changePasswordFn(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });
};

export {
  useLogin,
  useRegister,
  useGetProfile,
  useUpdateProfile,
  useGetAllUser,
  useDisableUser,
  useChangePassword,
};
