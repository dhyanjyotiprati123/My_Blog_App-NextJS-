
import dbConnect from "@/lib/dbConnect";
import { User } from "@/lib/models";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { SignJWT } from "jose";

const getSecretKey = () => new TextEncoder().encode(process.env.JWT_SECRET);

export async function POST(req) {
  await dbConnect();
  const body = await req.json();
  const { email, password } = body;

  if (!email || !password) {
    return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return NextResponse.json({ message: "Invalid password" }, { status: 401 });
  }

  const token = await new SignJWT({ id: user._id.toString(), email: user.email, Admin: user.Admin })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1d")
    .sign(getSecretKey());

  const response = NextResponse.json(
    {
      message: "Login successful",
      user: { name: user.name, email: user.email },
    },
    { status: 200 }
  );

  response.cookies.set("jwtToken", token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  return response;
}
