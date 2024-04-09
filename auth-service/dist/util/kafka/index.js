"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.consumer = exports.producer = void 0;
const kafkajs_1 = require("kafkajs");
const kafka = new kafkajs_1.Kafka({
    clientId: 'auth-service',
    brokers: ['localhost:9092']
});
exports.producer = kafka.producer();
exports.consumer = kafka.consumer({ groupId: 'auth-service-kafka-group' });
