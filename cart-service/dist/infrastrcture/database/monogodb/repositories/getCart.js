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
exports.getCart = void 0;
const cartModel_1 = require("../models/cartModel");
const getCart = (UserId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = UserId;
        const cartData = yield cartModel_1.CartModel.findOne({ userId: userId });
        if (!cartData) {
            throw new Error("Can't find cart");
        }
        const cart = {
            userId: cartData.userId,
            items: cartData.items.map(items => ({
                productId: items.productId,
                quantity: items.quantity
            }))
        };
        return cart;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.getCart = getCart;
