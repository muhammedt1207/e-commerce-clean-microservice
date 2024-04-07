import { IDependencies } from "../application/interfaces/IDepentencies";
import * as useCases from '../application/useCases'
import * as repositories from '../infrastrcture/database/monogodb/repositories'

export const dependancies:IDependencies={
    useCases:useCases,
    repositories
}

