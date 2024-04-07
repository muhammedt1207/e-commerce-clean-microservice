import { AdminEntity,AdminLoginEntity } from "../../domain/entities";


export interface IRepositories{
    login:(data:AdminLoginEntity)=>Promise<AdminEntity| null>
}