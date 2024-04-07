import { CartEntity,AddToCartEntity } from "../../domain/entities/cartEntitties";

export interface IRepositories{
    addToCart:(data:AddToCartEntity)=>Promise<CartEntity|null>
    getCart:(userId:string)=>Promise<CartEntity|null>
}