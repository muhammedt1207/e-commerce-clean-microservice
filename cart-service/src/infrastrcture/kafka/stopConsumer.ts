import { AnyArray } from "mongoose";
import { consumer } from ".";

export const stopConsumer=async()=>{
    try {
        console.log('stopping consumer');
        await consumer.stop();
        await consumer.disconnect()
        console.log('consumer stopper');
        
    } catch (error:any) {
        throw new Error(error)
    }
}