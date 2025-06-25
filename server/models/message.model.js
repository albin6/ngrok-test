import { model, Schema } from "mongoose";

const messageSchema = new Schema({
    _id: {
        type: String,
        required: true,
        trim: true
    },
    message : {
        type: String,
        required: true,
        trim: true
    },
}) 

export const Message = model('message', messageSchema);