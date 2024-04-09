import { Router } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { controllers } from "../../presentation/controller.ts";
export const adminRoutes=(dependancies:IDependencies)=>{
    const {login}=controllers(dependancies)
    const route =Router()


    route.route('/login').post(login)
//  route.post('/login',())

    return route
}