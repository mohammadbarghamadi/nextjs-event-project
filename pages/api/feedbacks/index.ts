import { NextApiRequest, NextApiResponse } from "next";
import FeedbackModel from "@/models/feedback.model";
import dbConnect from "@/utils/connect";

const feedbackHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        try {
            await dbConnect()
            const { name, email, description } = req.body
            const feedback = await FeedbackModel.create({ name, email, description })
            if (!feedback) return res.json({ success: false, message: "Faild to submit feedback!" })
            res.json({ success: true, data: feedback })
        } catch (e: any) {
            res.status(500).json({ success: false, error: e.message })
        }
    }
}

export default feedbackHandler