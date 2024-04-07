import { product } from "../models/productModel";
import { AddProduct } from "../../../../domain/entities/productEntities";


export const insertProduct=async(data:AddProduct)=>{
    try {
        const createdProduct=new product({
            _id:data._id,
            name:data.name,
            price:data.price,
            stock:data.stock
        })
        await createdProduct.save()
    } catch (error:any) {
        throw new Error(error)
    }
}