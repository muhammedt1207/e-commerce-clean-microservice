import { IDependencies } from "../../application/interfaces/IDepentencies";
import { addToCartController } from "./addTocart";
import { getCart } from "./getCart";




export const controller=(depentancies:IDependencies)=>{
    return {
        users:addToCartController(depentancies),
        getCart:getCart(depentancies)
    }
}