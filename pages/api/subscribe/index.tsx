import { NextApiRequest, NextApiResponse } from "next";

import mongoose,{Document} from "mongoose";

async function connectDB() {
    const connect = await mongoose.connect("mongodb://127.0.0.1:27017/frontDB")
    console.log("Connected to Database")
}

export interface SubInt extends Document {
    name: string
    email: string
} 

const subSchema = new mongoose.Schema<SubInt>({
    email: {
        type: String,
        required: true,
        unique: true
    }
})

const SubModel = mongoose.models.subscribers || mongoose.model('subscribers',subSchema)


async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectDB()
    if (req.method === "POST") {
        const newSub = new SubModel({ email: req.body.email })
        const subscribe = await newSub.save()
        if (!subscribe) return res.json({ success: false, message: "Cannot create new subscribe!" })
        res.json({ success: true, data: subscribe })
    }
}

export default handler