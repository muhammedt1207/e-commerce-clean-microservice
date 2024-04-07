import {IDependencies} from './IDepentencies'
import { IGetUserUseCase,IaddToCartUseCase } from '../../domain/useCasesInterface.ts'

export interface IUseCases{
    addToCartUseCase:(depentencies:IDependencies)=>IaddToCartUseCase;
    getCart:(depenetencies:IDependencies)=>IGetUserUseCase
}