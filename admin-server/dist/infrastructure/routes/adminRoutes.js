"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRoutes = void 0;
const express_1 = require("express");
const controller_ts_1 = require("../../presentation/controller.ts");
const adminRoutes = (dependancies) => {
    const { login } = (0, controller_ts_1.controllers)(dependancies);
    const route = (0, express_1.Router)();
    // route.route('/login').post(login)
    route.get('/login', (req, res) => {
        console.log("@@@@@#$%^&*()");
        res.send("helkkofnfindi");
    });
    return route;
};
exports.adminRoutes = adminRoutes;
