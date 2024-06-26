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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const loginCredintial_1 = require("../models/loginCredintial");
const bcrypt_1 = __importDefault(require("bcrypt"));
const login = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield loginCredintial_1.User.findOne({ email: data.email });
        if (user) {
            const isMatch = yield bcrypt_1.default.compare(data.password, user.password);
            if (!isMatch) {
                throw new Error("user name of password incorrect");
            }
            else {
                return user;
            }
        }
        else {
            throw new Error('User not found');
        }
    }
    catch (error) {
        throw new Error(error === null || error === void 0 ? void 0 : error.massage);
    }
});
exports.login = login;
