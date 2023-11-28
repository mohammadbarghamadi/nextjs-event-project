import { NextApiRequest, NextApiResponse } from "next"

function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        const feedbackId = req.query.feedbackId
        res.status(200).json({ success: true, feedbackId })
    }
}

export default handler