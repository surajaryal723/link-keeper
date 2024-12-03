import mongoose from "mongoose";

const contentSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    type:{
        type:String,
        required:true

    },
    link:{
        type:String,
        require:true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        
    }
})

export const contentModel=mongoose.model('Content',contentSchema)