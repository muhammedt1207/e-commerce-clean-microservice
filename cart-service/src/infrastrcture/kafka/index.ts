import { Consumer,Kafka,Producer } from "kafkajs";


export  const kafka=new Kafka({
    clientId:'cart-servise',
    brokers:["localhost:29092"]
})

export const producer:Producer=kafka.producer();
export const consumer:Consumer=kafka.consumer({
    groupId:'cart-service-kafka-group'
})