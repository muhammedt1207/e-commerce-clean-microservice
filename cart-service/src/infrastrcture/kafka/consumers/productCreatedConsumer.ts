import { ObjectId, Types } from "mongoose"
import { insertProduct } from "../../database/monogodb/repositories"


export default async(data:{
    _id?:Types.ObjectId,
    name:string,
    price:number,
    stock:number
})=>{
    try {
        await insertProduct(data)
    } catch (error:any) {
        throw new Error(error)
    }
}