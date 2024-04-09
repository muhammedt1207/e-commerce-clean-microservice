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
exports.userCreatedProducer = void 0;
const __1 = require("..");
const userCreatedProducer = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield __1.producer.connect();
        if (data.role == 'user' || data.role == 'admin') {
            const message = {
                topic: 'to-user',
                messages: [{
                        key: 'userCrated',
                        value: JSON.stringify(data)
                    }]
            };
            yield __1.producer.send(message);
        }
        else {
            throw new Error('Undifined user Role');
        }
    }
    catch (error) {
        console.error('kafka producer error :', error);
    }
    finally {
        yield __1.producer.disconnect();
    }
});
exports.userCreatedProducer = userCreatedProducer;
