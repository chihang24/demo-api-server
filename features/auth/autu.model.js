import mongoose, { Schema } from "mongoose";
import { randomUUID } from "crypto";

const userSchema = mongoose.Schema(
    {
        id: {
            type: Schema.Types.ObjectId,
            required: true,
            unique: true,
        },
        userName: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }
)

export const User = mongoose.model('User', userSchema);