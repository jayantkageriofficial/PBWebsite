import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const LoreModel = new mongoose.Schema({
    id:{
        type:String,
        unique:true,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    date:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    preview:{
        type:String,
        required:true
    },
    story:{
        type:[String],
        required:true
    },
    images:{
        type:[String],
        required:true
    }
})

const Lore = mongoose.models.lores || mongoose.model("Lore",LoreModel)

export default Lore