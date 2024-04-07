"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToCartController = void 0;
const addToCartController = (depentancies) => {
    const { useCases: { addToCartUseCase } } = depentancies;
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = req.body;
            console.log('add to cart data:', data);
            const user = yield addToCartUseCase(depentancies).execute(data);
            res.status(200).json({
                success: true,
                user: user,
                message: "Item added to  cart"
            });
        }
        catch (error) {
            next(error);
        }
    });
};
exports.addToCartController = addToCartController;
