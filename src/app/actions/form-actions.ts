/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { LoginSchema, RegisterSchema } from "@/lib/validation";
import axios from "@/lib/axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import setCookieParser from "set-cookie-parser";

export const loginAction = async (formData: FormData) => {
  const validateFields = LoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  console.log("Fields are Validated");

  if (!validateFields.success) {
    return { errors: validateFields.error.flatten().fieldErrors };
  }

  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const response = await axios.post("/auth/login", { email, password });

    const data = await response.data;
    console.log(response.headers["set-cookie"]);
    const cookieStore = await cookies();
    const cookieData = setCookieParser(response.headers["set-cookie"]!);

    cookieData.forEach((cookie: any) => {
      cookieStore.set(cookie.name, cookie.value, { ...cookie });
    });

    console.log(data);

    return data;
  } catch (error: any) {
    const message =
      error?.response?.data?.message || "Login failed. Please try again.";
    return { errors: { general: message } };
  }
};

export const signupAction = async (formData: FormData) => {
  const validateFields = RegisterSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    password: formData.get("password"),
    gender: formData.get("gender"),
    phone: formData.get("phone"),
    college_name: formData.get("college_name"),
    branch: formData.get("branch"),
    year_of_study: formData.get("year_of_study"),
  });

  console.log("Fields are Validated");

  if (!validateFields.success) {
    return { errors: validateFields.error.flatten().fieldErrors };
  }

  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const password = formData.get("password");
  const gender = formData.get("gender");
  const phone = formData.get("phone");
  const college_name = formData.get("college_name");
  const branch = formData.get("branch");
  const year_of_study = formData.get("year_of_study");

  try {
    const response = await axios.post("/auth/signup", {
      firstName,
      lastName,
      email,
      password,
      gender,
      phone,
      college_name,
      branch,
      year_of_study,
    });

    const data = await response.data;

    const cookieStore = await cookies();
    const cookieData = setCookieParser(response.headers["set-cookie"]!);

    cookieData.forEach((cookie: any) => {
      cookieStore.set(cookie.name, cookie.value, { ...cookie });
    });

    console.log(data);

    return data;
  } catch (error: any) {
    const message =
      error?.response?.data?.message || "Signup failed. Please try again.";
    return { errors: { general: message } };
  }
};
