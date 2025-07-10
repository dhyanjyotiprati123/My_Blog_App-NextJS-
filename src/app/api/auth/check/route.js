
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const getSecretKey = () => new TextEncoder().encode(process.env.JWT_SECRET);

export async function GET(req) {
  const token = req.cookies.get("jwtToken")?.value;

  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const { payload } = await jwtVerify(token, getSecretKey());
    return NextResponse.json({ user: payload });
  } catch (error) {
    console.log("Token verify error:", error.message);
    return NextResponse.json({ message: "Invalid Token" }, { status: 403 });
  }
}