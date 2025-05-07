import axiosInstance from "@/lib/axios";
import { LoginResponse } from "@/type/auth";

export const loginFn = async (payload: any) => {
  try {
    const { data } = await axiosInstance.post("/api/user/login", payload);
    return data;
  } catch (error: unknown) {
    console.log(error);
    throw error;
  }
};

export const registerFn = async (payload: any) => {
  try {
    const { data } = await axiosInstance.post("/api/user/register", payload);
    return data;
  } catch (error: unknown) {
    console.log(error);
  }
};

export const getProfileFn = async () => {
  try {
    const { data } = await axiosInstance.get("/api/user/profile");
    return data;
  } catch (error: unknown) {
    console.log(error);
  }
};

export const updateProfileFn = async (payload: any) => {
  try {
    const res = await axiosInstance.put("/api/user/profile", payload);
    return res;
  } catch (error: unknown) {
    console.log(error);
  }
};

export const getAllUserFn = async () => {
  try {
    const { data } = await axiosInstance.get("/api/user/all");
    return data;
  } catch (error: unknown) {
    console.log(error);
  }
};

export const disableUserFn = async (payload: any) => {
  try {
    const { data } = await axiosInstance.put(`/api/user/disable/${payload}`);
    return data;
  } catch (error: unknown) {
    console.log(error);
  }
};

export const changePasswordFn = async (payload: any) => {
  try {
    const { data } = await axiosInstance.put(
      "/api/user/change-password",
      payload
    );
    return data;
  } catch (error: unknown) {
    console.log(error);
  }
};
