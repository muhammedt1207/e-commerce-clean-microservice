import { Admin } from "../model/loginSchema";
import { AdminEntity,AdminLoginEntity } from "../../../../domain/entities";
import bcrypt from 'bcrypt'


export const login =async (data:AdminLoginEntity):Promise<AdminEntity|null> =>{
    try {
        console.log("admin log request get");
        console.log(data.email,data.password);
        
        if(!data.email || !data.password){
            throw new Error("email and password required");
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(data.email)){
            throw new Error("invalid email email format");
        }

        const admin:AdminEntity | null =await Admin.findOne({
            email:data.email
        })

        if(admin){
            const PasswordMatching:boolean = await bcrypt.compare(data.password,admin.password)
            if(!PasswordMatching){
                throw new Error("incorrect password");
            }
            else{
                return admin as AdminEntity;
            }
        }else{
            throw new Error("admin not found");
            
        }
    } catch (error:any) {
        console.log(error,'admin login error');
        
        throw new Error (error?.message)
    }
}
