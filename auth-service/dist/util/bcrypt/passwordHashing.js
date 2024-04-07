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
exports.passwordHashing = void 0;
const bcrypt_1 = require("bcrypt");
const passwordHashing = (password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hashPassword = yield (0, bcrypt_1.hash)(password, yield (0, bcrypt_1.genSalt)(10));
        if (!hashPassword) {
            throw new Error('Password hashing error');
        }
        return hashPassword;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.passwordHashing = passwordHashing;
