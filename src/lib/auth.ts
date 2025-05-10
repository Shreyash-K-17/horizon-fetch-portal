// // lib/getCurrentUser.ts
// import { cookies } from "next/headers";

// export async function getCurrentUser() {
//   const cookieStore = await cookies();
//   let accessToken = cookieStore.get("access_token")?.value;
//   const refreshToken = cookieStore.get("refresh_token")?.value;

//   if (!accessToken && !refreshToken) return null;

//   // Function to fetch user
//   const fetchUser = async (token: string) => {
//     const res = await fetch(`${process.env.LOCAL_BACKEND_URL}/auth/me`, {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       credentials: "include",
//       cache: "no-store",
//     });

//     if (!res.ok) return null;
//     return await res.json();
//   };

//   let user = await fetchUser(accessToken!);

//   // If the access token failed, try refreshing
//   if (!user && refreshToken) {
//     try {
//       const refreshRes = await fetch(
//         `${process.env.LOCAL_BACKEND_URL}/auth/refresh_token`,
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${refreshToken}`,
//           },
//           credentials: "include",
//         }
//       );

//       if (!refreshRes.ok) return null;

//       const refreshData = await refreshRes.json();
//       accessToken = refreshData.access_token;

//       // Try fetching user again with new access token
//       user = await fetchUser(accessToken!);
//     } catch (err) {
//       console.error("Error refreshing token:", err);
//       return null;
//     }
//   }

//   return user;
// }

// lib/getCurrentUser.ts
import { cookies } from "next/headers";

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  if (!accessToken) return null;

  try {
    const res = await fetch(`${process.env.LOCAL_BACKEND_URL}/auth/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      credentials: "include",
      cache: "no-store",
    });

    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
}

export async function getAllEvents() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  if (!accessToken) return null;

  try {
    const res = await fetch(`${process.env.LOCAL_BACKEND_URL}/event`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      credentials: "include",
    });

    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Error fetching events:", error);
    return null;
  }
}
