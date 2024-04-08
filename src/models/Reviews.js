import { Schema, model, models } from "mongoose";

const ReviewSchema = new Schema({
    username: {
        type: String,
    },
    role: {
        type: String,
    },
    amenities: {
        type: [String],
    },
    rating : {
        type: Number,
        required: true
    },
    review : {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },  
    dislikes: {
        type: Number,
        default: 0
    },
    comments: {
        type: Number,
        default: 0
    },
    postAsAnonymous: {
        type: Boolean,
        default: false
    },
    createdAt : {
        type: Date,
        default: Date.now
    }
});

export const Reviews = models.Reviews || model('Reviews', ReviewSchema);