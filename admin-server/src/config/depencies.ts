import * as repositories from '../infrastructure/dataBase/monogdb/repositories'
import { IDependencies } from '../application/interfaces/IDependencies'
import * as useCases from '../application/usecases'



export const dependancies:IDependencies={
    repositories,
    useCase:useCases
}