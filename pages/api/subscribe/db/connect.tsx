import mongoose from "mongoose";

export default async function connectDB() {
    const connect = await mongoose.connect("mongodb://127.0.0.1:27017/frontDB")
    console.log("Connected to Database")
}