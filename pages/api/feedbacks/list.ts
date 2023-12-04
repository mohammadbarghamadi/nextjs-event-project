import FeedbackModel from "@/models/feedback.model"
import dbConnect from "@/utils/connect"

export const listFeedbacks = async () => {
    await dbConnect()
    const feedbacks = await FeedbackModel.find({})
    return feedbacks
}