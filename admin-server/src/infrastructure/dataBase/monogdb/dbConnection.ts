import mongoose from "mongoose";

export default async()=>{
    require('dotenv').config();

    try {
        console.log(process.env.MONGODB_URL,'❕');
        
        await  mongoose.connect(String(process.env.MONGODB_URL))
        console.log(`
                🍃🍃🍃MONGO DB CONNECTE🍃🍃🍃🍃        
        `)
    } catch (error:any) {
        console.log(error?.message)
        console.log(`
        ❗❗❗❗MONGON DB CONNECTION ERROR❗❗❗❗
        `);
        
    }
}
