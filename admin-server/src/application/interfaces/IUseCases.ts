import { loginAdminUseCase } from "../../domain/userCaseInterface/AdminUseCaseInterface";
import { IDependencies } from "./IDependencies";

export interface IUseCase{
    loginAdminUseCase:(dependancies:IDependencies)=>loginAdminUseCase
}