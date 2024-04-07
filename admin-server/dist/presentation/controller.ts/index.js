"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllers = void 0;
const login_1 = require("./login");
const controllers = (dependencies) => {
    return {
        login: (0, login_1.loginController)(dependencies)
    };
};
exports.controllers = controllers;
