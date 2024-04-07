import { CartEntity,AddToCartEntity } from "../entities/cartEntitties";

export interface IaddToCartUseCase{
    execute(data:AddToCartEntity):Promise<CartEntity|null>
}