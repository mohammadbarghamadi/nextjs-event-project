import { NextApiRequest, NextApiResponse } from "next";
import FeedbackModel from "@/models/feedback.model";
import dbConnect from "@/utils/connect";


const FeedbackHandler = async (req: NextApiRequest, res: NextApiResponse) => {

    try {
        await dbConnect()
    } catch (e: any) {
        return res.status(500).json({ success: false, error: e.message })
    }

    try {
        const feedbacks = await FeedbackModel.find({})
        res.json({ success: true, data: feedbacks })
    } catch (e: any) {
        return res.status(500).json({ success: false, error: e.message })
    }

}


export default FeedbackHandler