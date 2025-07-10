
import mongoose from "mongoose";

const mongoUrl = process.env.MONGO_URL;

if(!mongoUrl){
    throw new Error("Please Add a mongoDB url in the env file");
};


let cached = global.mongoose;

if(!cached){
    cached = global.mongoose = {conn : null, promise: null}
};

async function dbConnect() {
    if(cached.conn){
        return cached.conn
    }
    if(!cached.promise){
        const opts = {
            bufferCommands: false
        }
         cached.promise = await mongoose.connect(mongoUrl)
    }

    cached.conn = await cached.promise;
    return cached.conn
};

export default dbConnect;