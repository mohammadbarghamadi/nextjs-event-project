import mongoose, { Document, Schema, models, model } from "mongoose";

export interface CommentSchema {
    name: string,
    email: string,
    comment: string,
    eventId: mongoose.Schema.Types.ObjectId
}

interface CommentSchemaInt extends CommentSchema, Document { }

const commentSchema = new Schema<CommentSchemaInt>({
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String
    },
    comment: {
        type: String,
        required: true
    },
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
})

const CommentModel = models.comments || model('comments', commentSchema)

export default CommentModel