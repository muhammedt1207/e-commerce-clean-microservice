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
exports.addToCart = void 0;
const cartModel_1 = require("../models/cartModel");
const addToCart = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let cart = yield cartModel_1.CartModel.findOne({ userId: data.userId });
        if (!cart) {
            cart = yield cartModel_1.CartModel.create({ userId: data.userId, items: [] });
        }
        const existingItemIndex = cart.items.findIndex(item => item.productId.equals(data.productId));
        if (existingItemIndex) {
            cart.items[existingItemIndex].quantity += 1;
        }
        else {
            cart.items.push({ productId: data.productId, quantity: 1 });
        }
        const updatedCart = yield cart.save();
        const cartEntity = {
            userId: updatedCart.userId,
            items: updatedCart.items
        };
        return cartEntity;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.addToCart = addToCart;
