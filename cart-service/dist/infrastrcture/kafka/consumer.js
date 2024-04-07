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
exports.runConsumer = void 0;
const _1 = require(".");
const stopConsumer_1 = require("./stopConsumer");
const subscribe_1 = require("./subscribe");
const runConsumer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield _1.consumer.connect();
        yield _1.consumer.subscribe({
            topic: 'to-user',
            fromBeginning: true
        });
        yield _1.consumer.subscribe({
            topic: 'product',
            fromBeginning: true
        });
        const subscribed = (0, subscribe_1.createSubscriber)();
        yield _1.consumer.run({
            eachMessage: (_a) => __awaiter(void 0, [_a], void 0, function* ({ message }) {
                const { key, value } = message;
                console.log(key, value, 'key and values');
                const subscriberMethod = String(key);
                console.log(subscriberMethod, 'subscriberMethod');
                const subscriberData = JSON.parse(String(value));
                try {
                    yield subscribed[subscriberMethod](subscriberData);
                }
                catch (error) {
                    throw new Error(error === null || error === void 0 ? void 0 : error.message);
                    yield (0, stopConsumer_1.stopConsumer)();
                }
            })
        });
    }
    catch (error) {
        console.error('Consumer error:', error.message);
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
});
exports.runConsumer = runConsumer;
