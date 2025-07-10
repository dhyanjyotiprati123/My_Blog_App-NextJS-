import formidable from "formidable";
import { readFile } from "fs/promises";
import dbConnect from "@/lib/dbConnect";
import { Post } from "@/lib/models";
import { jwtVerify } from "jose";
import mongoose from "mongoose";

export const config = {
  api: {
    bodyParser: false,
  },
};

const getSecretKey = () => new TextEncoder().encode(process.env.JWT_SECRET);

export default async function handler(req, res) {
  console.log("▶ API HIT: /api/blog");

  if (req.method !== "POST") {
    console.log("❌ Invalid method:", req.method);
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  await dbConnect();
  console.log("✅ DB Connected");

  const token = req.cookies.jwtToken; 

  console.log("my token" , token)

  if (!token) {
    console.log("❌ JWT token missing");
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const { payload } = await jwtVerify(token, getSecretKey());
    const userId = payload.id;
    
    console.log("✅ JWT Verified, UserID:", userId);
    console.log("📏 userId type:", typeof userId);


    const { fields, files } = await new Promise((resolve, reject) => {
      const form = formidable({ multiples: false, keepExtensions: true,  maxFileSize: 10 * 1024 * 1024 });

      form.parse(req, (err, fields, files) => {
        if (err) {
          console.log("❌ Formidable error:", err);
          return reject(err);
        }
        console.log("✅ Form parsed");
        resolve({ fields, files });
      });
    });

    console.log("📦 Fields:", fields);
    console.log("📎 Files:", files);

    // 🔒 SAFETY CHECK
    if (!files?.image?.[0]?.filepath) {
      console.log("❌ No image uploaded");
      return res.status(400).json({ message: "Image is required" });
    }

    const imageBuffer = await readFile(files.image[0].filepath);

    const newPost = await Post.create({
      title: fields.title?.[0],
      desc: fields.desc?.[0],
      image: imageBuffer,
      author: new mongoose.Types.ObjectId(userId),
    });

    console.log("✅ Post created");
    return res.status(201).json({ message: "Post created", post: newPost });

  } catch (err) {
    console.error("🔥 API CRASHED:", err);
    return res.status(500).json({ message: "Server error", error: err.message });
  }
}
