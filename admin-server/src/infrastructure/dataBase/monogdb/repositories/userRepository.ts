import { User,UserData } from "../../../../domain/entities";
import { Admin } from "../model/loginSchema";
import bcrypt from 'bcrypt'


export const addUser = async (data: UserData): Promise<User | null> => {
    try {
        
        if(!data.email || !data.username || !data.password){
            throw new Error ("userName, Email, Password Require")
        }

        if(data.username.trim()===""){
            throw new Error ('User Name connot be empty')
        }
        const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!regex.test(data.email)){
            throw new Error ("invalid email format")
        }

        if(data.password.length<6){
            throw new Error ("password must be at least 6 charecters")
        }
        const existingUser:User | null = await Admin.findOne({email: data.email})

        if(existingUser){
            throw new Error("User already exist");
        }

        const hashedPass=await bcrypt.hash(data.password,10)

        const newUser = new Admin({
            email: data.email,
            password: hashedPass,
            username: data.username
        });
        
        const saveduser=await newUser.save()
        return saveduser;
    } catch (error:any) {
        throw new Error(error.message);
        
    }
}

