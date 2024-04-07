import UserCreatedConsumer from "./consumers/UserCreatedConsumer";
import productCreatedConsumers from "./consumers/productCreatedConsumer";


export const createSubscriber = () => {
    return {
        userCreated: UserCreatedConsumer,
        productcreated: productCreatedConsumers
    }
}