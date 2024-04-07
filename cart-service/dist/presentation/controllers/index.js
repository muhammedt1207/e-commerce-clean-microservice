"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
const addTocart_1 = require("./addTocart");
const getCart_1 = require("./getCart");
const controller = (depentancies) => {
    return {
        users: (0, addTocart_1.addToCartController)(depentancies),
        getCart: (0, getCart_1.getCart)(depentancies)
    };
};
exports.controller = controller;
