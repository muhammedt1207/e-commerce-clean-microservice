import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDepentencies";
import { CartEntity } from "../../domain/entities/cartEntitties";



export const getCart=(depentancies:IDependencies)=>{
    const {useCases:{getCart}}=depentancies;
    return async (req:Request,res:Response,next:NextFunction):Promise<void>=>{
        try {
            const userId=req.params.id
            const cart:CartEntity|null=await getCart(depentancies).execute(userId)
            res.status(200).json({success:true,data:cart})
        } catch (error) {
            next(error)
        }
    }
}