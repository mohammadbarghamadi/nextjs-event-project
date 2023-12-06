import { NextApiRequest, NextApiResponse } from "next";
import CommentModel, { CommentSchema } from "@/models/comment.model";
import dbConnect from "@/utils/connect";


type GetComments = (eventId: string) => Promise<CommentSchema[]>

export const getComments: GetComments = async (eventId) => {

    try {
        await dbConnect()
        const comments = await CommentModel.find({ eventId })
        return comments
    } catch (e: any) {
        return []
    }
}

const commentHandler = async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method === "GET") {

        try {
            await dbConnect()
        } catch (e: any) {
            return res.status(500).json({ success: false, error: e.message })
        }

        try {
            // const eventId = req.body.eventId || null
            const comments = await CommentModel.find()
            res.json({ success: true, data: comments })
        } catch (e: any) {
            return res.status(500).json({ success: false, error: e.message })
        }
    }

    if (req.method === "POST") {

        try {
            await dbConnect()
        } catch (e: any) {
            return res.status(500).json({ success: false, error: e.message })
        }

        try {
            const { name, email, comment, eventId } = req.body
            const newComment = await CommentModel.create({ name, email, comment, eventId })
            res.json({ success: true, data: newComment })
        } catch (e: any) {
            res.status(500).json({ success: false, error: e.message })
        }

    }

}

export default commentHandler