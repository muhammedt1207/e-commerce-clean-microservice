import mongoose,{Schema} from "mongoose";
import { AdminEntity } from "../../../../domain/entities";

const adminSchema=new Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,

    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user',
    },
    isBlocked:{
        type:Boolean,
        default:false
    }},
    {
        timestamps:true
    }
)

export const Admin=mongoose.model<AdminEntity>("logincredentials",adminSchema)

