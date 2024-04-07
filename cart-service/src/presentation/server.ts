import express,{ Application,Request,Response,NextFunction } from "express";
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import { carttRoute } from "../infrastrcture/routes/cartRoute";

dotenv.config()
const app:Application=express()
const PORT:number=Number(process.env.PORT)||3004


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


// app.use(carttRoute(depende))

app.use((err:Error,req:Request,res:Response,next:NextFunction)=>{
    console.log(err)
    const errorResponse = {
        errors: [{ message: err?.message || "Something went wrong" }],
      };
      return res.status(500).json(errorResponse);
})

app.listen(PORT, () => {
    console.log(`connected to auth service at ${PORT}`);
  });
  
  export default app;