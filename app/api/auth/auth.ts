import axiosInstance from "@/lib/axios";
import { LoginResponse } from "@/type/auth";

export const loginFn = async (payload: any) => {
  try {
    console.log("payload", payload);
    const { data } = await axiosInstance.post("/login", payload);
    return data;
  } catch (error: unknown) {
    console.log(error);
    throw error;
  }
};

export const registerFn = async (payload: any) => {
  try {
    console.log("data", payload);
    const { data } = await axiosInstance.post("/register", payload);
    return data;
  } catch (error: unknown) {
    console.log(error);
  }
};

export const getProfileFn = async () => {
  try {
    const res = await axiosInstance.get("/profile");
    return res;
  } catch (error: unknown) {
    console.log(error);
  }
};
