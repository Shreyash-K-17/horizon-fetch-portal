import { NextRequest, NextResponse } from "next/server";

console.log("🚀 Middleware loaded");

export const middleware = async (req: NextRequest) => {
  console.log("➡️ Inside middleware");

  const refreshToken = req.cookies.get("refresh_token")?.value;
  const accessToken = req.cookies.get("access_token")?.value;

  // Check if access token already exists in the cookies
  if (accessToken) {
    console.log("✅ Access token already exists, proceeding...");
    return NextResponse.next();
  }

  if (!refreshToken) {
    console.log("❌ No refresh_token, redirecting to login");
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  try {
    const res = await fetch(
      `${process.env.LOCAL_BACKEND_URL}/auth/refresh_token`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${refreshToken}`,
        },
      }
    );

    if (!res.ok) {
      console.log("❌ Token refresh failed, redirecting to login");
      const url = req.nextUrl.clone();
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }

    const data = await res.json();
    console.log("✅ Token refresh response:", data);

    if (data.access_token) {
      // Manually set the new access token as a cookie
      const response = NextResponse.next();
      response.cookies.set("access_token", data.access_token, {
        path: "/", // Root path for accessibility
        httpOnly: true, // Restrict access to client-side scripts
        secure: false, // Set to true in production (HTTPS)
        sameSite: "lax", // Adjust as per cross-origin requirements
        maxAge: 3600, // Token expiry time (1 hour)
      });

      console.log("✅ Access token set manually in cookies");
      return response;
    }

    console.log("❌ No access token in response, redirecting to login");
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  } catch (error) {
    console.error("❌ Error validating auth in middleware:", error);
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
};

export const config = {
  matcher: ["/profile", "/profile/:path*", "/events", "/events/:path*"],
};
