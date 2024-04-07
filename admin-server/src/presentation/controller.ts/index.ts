import { IDependencies } from '../../application/interfaces/IDependencies'

import {loginController} from './login'

export const controllers = (dependencies:IDependencies)=>{
    return{
       login:loginController(dependencies)
    }
}