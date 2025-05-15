/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { LoginSchema, RegisterSchema } from "@/lib/validation";
import axios from "@/lib/axios";
import { cookies } from "next/headers";
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
  const year_of_study_raw = formData.get("year_of_study");
  const year_of_study = year_of_study_raw
    ? Number(year_of_study_raw)
    : undefined;

  const validateFields = RegisterSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    password: formData.get("password"),
    gender: formData.get("gender"),
    phone: formData.get("phone"),
    college_name: formData.get("college_name"),
    branch: formData.get("branch"),
    year_of_study,
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
    console.error(error);
    const message =
      error?.response?.data?.message || "Signup failed. Please try again.";
    return { errors: { general: message } };
  }
};

export async function registerForEventAction(event_id: string, data: any) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  if (!accessToken || !event_id)
    return { success: false, error: "Unauthorized or invalid event." };

  const reformedData = {
    ...data,
    team_name: data.teamName,
    team_members: data.teamMembers,
  };

  try {
    const response = await axios.post(
      `/registrations/${event_id}`,
      reformedData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    return { success: true, data: response.data };
  } catch (err: any) {
    return {
      success: false,
      error: err?.response?.data?.message || "Registration failed.",
      error_code: err?.response?.data?.error_code || null,
    };
  }
}

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  if (!accessToken) return { success: false, error: "Unauthorized" };

  try {
    const response = await axios.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      withCredentials: true,
    });

    return { success: true, data: response.data };
  } catch (err: any) {
    return {
      success: false,
      error: err?.response?.data?.message || "Failed to fetch user.",
    };
  }
}

export async function getAllEvents() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  if (!accessToken) return { success: false, error: "Unauthorized" };

  try {
    const response = await axios.get("/event", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      withCredentials: true,
    });

    return { success: true, data: response.data };
  } catch (err: any) {
    return {
      success: false,
      error: err?.response?.data?.message || "Failed to fetch events.",
    };
  }
}

export async function getEventById(event_id: string) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  if (!accessToken || !event_id)
    return { success: false, error: "Unauthorized or invalid event ID." };

  try {
    const response = await axios.get(`/event/${event_id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      withCredentials: true,
    });

    return { success: true, data: response.data };
  } catch (err: any) {
    return {
      success: false,
      error: err?.response?.data?.message || "Failed to fetch event.",
    };
  }
}

export async function getAllRegistredEventsOfUser() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  if (!accessToken) return { success: false, error: "Unauthorized" };

  try {
    const response = await axios.get("/registrations/user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      withCredentials: true,
    });

    return { success: true, data: response.data };
  } catch (err: any) {
    return {
      success: false,
      error: err?.response?.data?.message || "Failed to fetch event.",
    };
  }
}
