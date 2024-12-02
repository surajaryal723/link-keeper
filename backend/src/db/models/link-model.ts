import mongoose from "mongoose";

const linkSchema=new mongoose.Schema({
    hash:{
        type:String,
        unique:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})

export const linkModel=mongoose.model('Link',linkSchema)