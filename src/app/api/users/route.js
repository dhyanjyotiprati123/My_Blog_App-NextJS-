import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { User } from "@/lib/models";

export async function GET() {
  try {
    await dbConnect();

    const users = await User.find({ Admin: { $ne: true } }).select("-password");

    return NextResponse.json({ users });
  } catch (error) {
    console.error("Error fetching users:", error.message);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}
