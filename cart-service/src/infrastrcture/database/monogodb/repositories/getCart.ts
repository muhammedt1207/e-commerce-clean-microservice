import { CartEntity } from "../../../../domain/entities/cartEntitties";
import { CartModel } from "../models/cartModel";




export const getCart=async(UserId:string):Promise<CartEntity|null>=>{
    try {
        const userId=UserId
        const cartData:CartEntity|null=await CartModel.findOne({userId:userId})
        if(!cartData){
            throw new Error("Can't find cart")
        }
        const cart:CartEntity|null={
            userId:cartData.userId,
            items:cartData.items.map(items=>({
                productId:items.productId,
                quantity:items.quantity
            }))
        }

        return cart
    } catch (error:any) {
        throw new Error(error)
    }
}