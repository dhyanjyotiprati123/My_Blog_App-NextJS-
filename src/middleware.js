
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";


const getSecretKey = () => new TextEncoder().encode(process.env.JWT_SECRET);

export async function middleware(req) {
  console.log("Running middleware for:", req.nextUrl.pathname);

  const token = req.cookies.get("jwtToken")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    const { payload } = await jwtVerify(token, getSecretKey());

    return NextResponse.next();
  } catch (error) {
    console.log("JWT verification failed:", error.message);
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/admin", "/admin/users", "/admin/posts", "/admin/analytics", "/admin/stats", "/blog"]
};
