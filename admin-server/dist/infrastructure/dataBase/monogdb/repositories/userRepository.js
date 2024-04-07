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
exports.addUser = void 0;
const loginSchema_1 = require("../model/loginSchema");
const bcrypt_1 = __importDefault(require("bcrypt"));
const addUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!data.email || !data.username || !data.password) {
            throw new Error("userName, Email, Password Require");
        }
        if (data.username.trim() === "") {
            throw new Error('User Name connot be empty');
        }
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(data.email)) {
            throw new Error("invalid email format");
        }
        if (data.password.length < 6) {
            throw new Error("password must be at least 6 charecters");
        }
        const existingUser = yield loginSchema_1.Admin.findOne({ email: data.email });
        if (existingUser) {
            throw new Error("User already exist");
        }
        const hashedPass = yield bcrypt_1.default.hash(data.password, 10);
        const newUser = new loginSchema_1.Admin({
            email: data.email,
            password: hashedPass,
            username: data.username
        });
        const saveduser = yield newUser.save();
        return saveduser;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.addUser = addUser;
