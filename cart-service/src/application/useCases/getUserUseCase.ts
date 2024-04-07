import { ObjectId, Types } from "mongoose"
import { IDependencies } from "../interfaces/IDepentencies"


export const getCart=(depentancies:IDependencies)=>{
    const{repositories:{getCart}}=depentancies
    return{
        execute:async(userid:string)=>{
            try {
                return null
            } catch (error:any) {
                throw new Error(error?.message)
            }
        }
    }
}