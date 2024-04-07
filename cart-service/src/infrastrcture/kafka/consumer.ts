import { consumer } from "."
import { stopConsumer } from "./stopConsumer"
import { createSubscriber } from "./subscribe"



export const runConsumer=async()=>{
    try {
        await consumer.connect()
        await consumer.subscribe({
            topic:'to-user',
            fromBeginning:true
        })
        await consumer.subscribe({
            topic:'product',
            fromBeginning:true
        })

        const subscribed:any=createSubscriber()
        await consumer.run({
            eachMessage:async({message})=>{
                const {key,value}=message
                console.log(key,value,'key and values');
                
                const subscriberMethod=String(key)
                console.log(subscriberMethod,'subscriberMethod');

                const subscriberData=JSON.parse(String(value))

                try {
                    await subscribed[subscriberMethod](subscriberData)
                } catch (error:any) {
                    throw new Error(error?.message)
                    await stopConsumer();
                }
                
            }
        })

    } catch (error:any) {
        console.error('Consumer error:', error.message);
        throw new Error(error?.message) 
    }
}
