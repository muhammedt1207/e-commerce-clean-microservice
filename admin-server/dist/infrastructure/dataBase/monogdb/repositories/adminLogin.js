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
const loginSchema_1 = require("../model/loginSchema");
const bcrypt_1 = __importDefault(require("bcrypt"));
const login = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("admin log request get");
        console.log(data.email, data.password);
        if (!data.email || !data.password) {
            throw new Error("email and password required");
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            throw new Error("invalid email email format");
        }
        const admin = yield loginSchema_1.Admin.findOne({
            email: data.email
        });
        if (admin) {
            const PasswordMatching = yield bcrypt_1.default.compare(data.password, admin.password);
            if (!PasswordMatching) {
                throw new Error("incorrect password");
            }
            else {
                return admin;
            }
        }
        else {
            throw new Error("admin not found");
        }
    }
    catch (error) {
        console.log(error, 'admin login error');
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
});
exports.login = login;
