import { AddToCartEntity, CartEntity } from "../../../../domain/entities/cartEntitties";
import { CartModel, ICartDocument } from "../models/cartModel";


export const addToCart=async(data:AddToCartEntity):Promise<CartEntity|null>=>{
    try {
        let cart:ICartDocument|null =await CartModel.findOne({userId:data.userId})
        if(!cart){
            cart=await CartModel.create({userId:data.userId,items:[]})
        }
        const existingItemIndex=cart.items.findIndex(item=>item.productId.equals(data.productId))
        if(existingItemIndex){
            cart.items[existingItemIndex].quantity+=1
        }else{
            cart.items.push({productId:data.productId,quantity:1})

        }

        const updatedCart =await  cart.save()
        
        const cartEntity: CartEntity = {
            userId: updatedCart.userId,
            items: updatedCart.items
        };

        return cartEntity;
    } catch (error:any) {
        throw new Error(error)
    }
}