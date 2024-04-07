import { NextFunction,Request,Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { AdminEntity } from "../../domain/entities";
import jwt  from 'jsonwebtoken'


export const loginController=(dependancies:IDependencies)=>{
    const {useCase:{loginAdminUseCase}}=dependancies
    
    const loginAdmin=async (req:Request,res:Response,next:NextFunction)=>{
        console.log('get login request');
        try {
            const adminCredentials=req.body
            console.log("admin credentials",adminCredentials);
            
            const admin:AdminEntity | null =await loginAdminUseCase(dependancies).execute(adminCredentials)
            if(admin){
                if(admin.role=='admin'){
                    let payload ={
                        _id:String(admin?._id),
                        email:admin?.email,
                        role:admin?.role
                    }
                    const accessToken=jwt.sign(
                        payload,
                        String(process.env.ACCESS_TOKEN_SECRET),
                        {expiresIn:"1h"}
                    )
                    res.cookie("user_jwt",accessToken,{
                        httpOnly:true
                    })

                    res.status(200).json({
                        success:true,
                        user:admin,
                        message:"Admin Varified!"
                    })

                }else{
                    res.status(401).json({message:'login failed unothrized login'})
                }
            }else{
                res.status(401).json('Unauthorized')
            }
        } catch (error:any) {
            console.log('error in the login controllers',error?.message)
            next(error)
        }
    }
    return loginAdmin

}
