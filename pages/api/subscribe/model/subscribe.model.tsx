import mongoose,{Document} from "mongoose";

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

const SubModel = mongoose.model('subscribers',subSchema)

export default SubModel