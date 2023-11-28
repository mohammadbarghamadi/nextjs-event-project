import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "./db/connect";
import SubModel from "./model/subscribe.model";


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