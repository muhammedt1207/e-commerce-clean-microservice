import { IUserEntity } from "../../../../domain/entities/userEntity";
import { User } from "../models/userModel";


export const insertUser=async(data:IUserEntity)=>{
    try {
        const user=new User({
            _id:data._id,
            username:data.username,
            email:data.email,
            password:data.password,
        })
        await user.save()
    } catch (error:any) {
        throw new Error(error);
        
    }
}