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
exports.signup = void 0;
const passwordHashing_1 = require("../../util/bcrypt/passwordHashing");
const genarateToken_1 = __importDefault(require("../../util/jwt/genarateToken"));
const signup = (dependancies) => {
    const { useCases: { signupUserUseCase, findUserByEmailUerCase } } = dependancies;
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        try {
            const credential = req.body;
            console.log('user credentials :', credential);
            if (!credential.username.trim()) {
                res.status(400).json({ success: false, message: 'user name not be empty' });
                return;
            }
            if (!credential.password || !credential.email) {
                res.status(400).json({ success: false, message: 'password and Email not be empty' });
                return;
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(credential.email)) {
                res.status(400).json({ success: false, message: 'Invalid email format' });
                return;
            }
            if (credential.password.length < 6) {
                res.status(400).json({ status: false, message: 'Password must be at least 6 charecters' });
                return;
            }
            try {
                const existingUser = yield findUserByEmailUerCase(dependancies).execute(credential.email);
                if (existingUser) {
                    res.status(400).json({ success: false, message: 'Email alredy exists' });
                    return;
                }
            }
            catch (error) {
                console.error('Erro finding user by email:', error);
            }
            const hashedPassword = yield (0, passwordHashing_1.passwordHashing)(credential.password);
            credential.password = hashedPassword;
            const user = yield signupUserUseCase(dependancies).execute(credential);
            if (user) {
                const userId = (_b = (_a = user._id) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : "";
                const token = (0, genarateToken_1.default)({
                    userId: userId,
                    userEmail: user.email,
                    isAdmin: user.isAdmin,
                    isBlock: user.isBlocked
                });
                res.cookie('auth', token, {
                    maxAge: 1000 * 60 * 60 * 24,
                    httpOnly: true
                });
                res.status(201).json({ success: true, data: user, message: 'User Created' });
            }
            else {
                res.status(404).json({ success: false, message: 'User not found' });
            }
        }
        catch (error) {
            next(error);
        }
    });
};
exports.signup = signup;
