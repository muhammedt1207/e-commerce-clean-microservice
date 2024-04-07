import { Types } from "mongoose";

export interface AddProduct{
    _id?:Types.ObjectId,
    name:string,
    price:number,
    stock:number
}