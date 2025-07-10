
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    Admin : {
        type: Boolean,
        default: false
    }
});


const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    image: {
        type: Buffer
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

export const User = mongoose.models?.User || new mongoose.model("User", userSchema);

export const Post = mongoose.models?.Post || new mongoose.model("Post", postSchema);