import { AdminLoginEntity,AdminEntity } from "../entities";

export interface loginAdminUseCase{
    execute(credentials:AdminLoginEntity):Promise<AdminEntity | null>
}
