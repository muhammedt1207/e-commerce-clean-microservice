import { CartEntity } from "../entities/cartEntitties";

export interface IGetUserUseCase {
    execute(userId: string): Promise<CartEntity | null>;
}
