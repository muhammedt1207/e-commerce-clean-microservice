import { AddToCartEntity } from "../../domain/entities/cartEntitties";
import { IDependencies } from "../interfaces/IDepentencies";

export const addToCartUseCase=(depentencies:IDependencies)=>{
    const {repositories:{addToCart}}=depentencies
    return{
        execute:async(data:AddToCartEntity)=>{
            try{
                return await addToCart(data)
            }catch(error:any){
                throw new Error(error)
            }
        }
    }
}
