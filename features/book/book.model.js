import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        TITLE: {
            type: String,
            required: true
        },
        AUTHOR: {
            type: String,
            required: true
        },
        PUBLISH_YEAR: {
            type: String,
            required: false
        },
        NumPages: {
            type: Number,
            required: false
        }
    },
    {
        timestamps: true
    }
);

export const Book = mongoose.model('Book', bookSchema);