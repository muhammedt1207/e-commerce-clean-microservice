import { Router } from "express";
import { IDependencies } from "../../application/interfaces/IDepentencies";
import { controller } from "../../presentation/controllers";


export const carttRoute=(depentancies:IDependencies)=>{
    const{users,getCart}=controller(depentancies)
    const router=Router();

    router.route('/addtocart').post(users)
    router.route('/getcart/:id').get(getCart)

    return router
}