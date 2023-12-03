import { model, models, Schema, Document } from "mongoose";


export interface SubscriberSchema {
    name: string,
    email: string
};

interface SubscriberSchemaInt extends SubscriberSchema, Document { };

const subscriberSchema = new Schema<SubscriberSchemaInt>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

const SubscriberModel = models.subscribers || model('subscribers', subscriberSchema);

export default SubscriberModel;

