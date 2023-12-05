import mongoose from "mongoose";


const dbConnect = async () => {
    try {
        const DB_URL = process.env.DB_URL!
        const DB_NAM = process.env.DB_NAM!
        await mongoose.connect(DB_URL + DB_NAM)
        console.log("Connected to Database!")
    } catch (e: any) {
        console.log("Cannot connect to Database: " + e.message)
    }
}

export default dbConnect