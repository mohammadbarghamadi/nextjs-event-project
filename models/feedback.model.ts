import { Document, Schema, models, model } from "mongoose";


export interface FeedbackSchema {
    name: string,
    email: string,
    description: string
}

interface FeedbackSchemaInt extends FeedbackSchema, Document { }


const feedbackSchema = new Schema<FeedbackSchemaInt>({
    name: String,
    email: String,
    description: {
        type: String,
        required: true
    }
})

const FeedbackModel = models.feedbacks || model('feedbacks', feedbackSchema);

export default FeedbackModel