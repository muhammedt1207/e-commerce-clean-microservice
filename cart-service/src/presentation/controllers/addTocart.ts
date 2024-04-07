import { Request, Response, NextFunction } from 'express'
import { IDependencies } from "../../application/interfaces/IDepentencies";
import { CartEntity } from '../../domain/entities/cartEntitties';


export const addToCartController = (depentancies: IDependencies) => {
    const { useCases: { addToCartUseCase } } = depentancies

    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const data=req.body
            console.log('add to cart data:',data)
            
            const user:CartEntity|null =await addToCartUseCase(depentancies).execute(data)
            res.status(200).json({
                success:true,
                user:user,
                message:"Item added to  cart"
            })        


        } catch (error:any) {
            next(error)
        }
    }
}