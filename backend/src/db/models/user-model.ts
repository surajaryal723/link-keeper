import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
   firstname:String,
   lastname:String,

    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        // select:false
    },
    createdAt: {
        type: Date,
        default: Date.now,
        transform: (date: Date) => date.toLocaleString()
    }
});

export const UserModel = mongoose.model('User', userSchema);
