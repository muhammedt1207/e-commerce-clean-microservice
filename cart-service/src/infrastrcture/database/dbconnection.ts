import mongoose from "mongoose";


export default async ()=>{
    require ("dotenv").config()
    try {
        await mongoose.connect(String(process.env.MONGO_URL))
        console.log("🍃🍃MONGO DB CONNECTED🍃🍃");
        
    } catch (error) {
        console.log('❗❗MONGO DB CONNECTION ERROR❗❗')
        console.log(error);
        process.exit(1)
        
    }
}