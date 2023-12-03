import { NextApiRequest, NextApiResponse } from "next";
import SubscriberModel from "@/models/subscriber.model";
import dbConnect from "@/utils/connect";

const SubscriberHandler = async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method === "POST") {

        try {
            await dbConnect()
            const { name, email } = req.body
            const subscriber = await SubscriberModel.create({ name, email })

            if (!subscriber) return res.json({ success: false, message: "Cannot create new subscriber!" })

            res.json({ success: true, data: subscriber })
        } catch (e: any) {
            res.status(500).json({ success: false, error: e.message })
        }
    }

}

export default SubscriberHandler