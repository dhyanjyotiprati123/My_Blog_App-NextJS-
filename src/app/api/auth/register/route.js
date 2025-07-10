

import dbConnect from "@/lib/dbConnect"
import { User } from "@/lib/models";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    if(req.method !== "POST"){
        return NextResponse.json({message: "only post methods are allowed"})
    }
    await dbConnect();
   
    const body = await req.json()
    const {name, email,password, phone} = body;


    if(!name || !email || !password || !phone){
        return NextResponse.json({message: "all fields are required"}, {status: 400})
    }

    const existingUser = await User.findOne({email});

    if(existingUser){
        return NextResponse.json({message: "user already exist"}, {status: 401})
    }

    const hashPassword = await bcrypt.hash(password, 12);

    const newuser = new User({
        name,
        email,
        password: hashPassword,
        phone
    });

    await newuser.save();
    
    return NextResponse.json({message: "user created"}, {status: 201})
}
