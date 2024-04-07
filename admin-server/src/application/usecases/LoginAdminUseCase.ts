import { AdminLoginEntity } from "../../domain/entities";
import { IDependencies } from "../interfaces/IDependencies";


export const loginAdminUseCase=(depencies:IDependencies)=>{
    const {repositories:{login}}=depencies
    return {
        execute:async(data:AdminLoginEntity)=>{
            try {
                return await login(data)
            } catch (error:any) {
                throw new Error(error?.message)
            }
        }

    }
}
