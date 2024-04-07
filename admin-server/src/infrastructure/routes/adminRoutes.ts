import { Router } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { controllers } from "../../presentation/controller.ts";
export const adminRoutes=(dependancies:IDependencies)=>{
    const {login}=controllers(dependancies)
    const route =Router()


    // route.route('/login').post(login)
 route.get('/login',(req,res)=>{
    console.log("@@@@@#$%^&*()");
    res.send("helkkofnfindi")
    
 })

    return route
}