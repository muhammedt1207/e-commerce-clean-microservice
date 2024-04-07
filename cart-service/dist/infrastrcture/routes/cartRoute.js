"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carttRoute = void 0;
const express_1 = require("express");
const controllers_1 = require("../../presentation/controllers");
const carttRoute = (depentancies) => {
    const { users, getCart } = (0, controllers_1.controller)(depentancies);
    const router = (0, express_1.Router)();
    router.route('/addtocart').post(users);
    router.route('/getcart/:id').get(getCart);
    return router;
};
exports.carttRoute = carttRoute;
