import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req){
    try {
         const {name, email, mobile, message} = await req.json();

    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    });

    
    const mailOptions = {
      from: email,
      to: process.env.MAIL_USER,
      subject: `Contact Form: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${mobile}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({message: "mail sent successfully"}, {status: 200})
    } catch (error) {
       console.log("failed to send mail", error.message);
       return NextResponse.json({message:"mail not sent"}, {status: 500})
    }
}