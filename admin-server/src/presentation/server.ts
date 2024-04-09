import express,{ Application, Request,Response,NextFunction } from "express";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv'
import { adminRoutes } from "../infrastructure/routes/adminRoutes";
import { dependancies } from "../config/depencies";
import { isExpression } from "typescript";
import morgan = require("morgan");


dotenv.config();
const app:Application =express();
const port :number =Number(process.env.port)|3002

app.use(express.json)
app.use(cookieParser())
app.use(morgan('short'))

app.use('/',adminRoutes(dependancies))

app.use((err:Error , req:Request,res:Response,next:NextFunction)=>{
    const errorResonse={
        errors:[{message:err.message}]
    }
    console.log(errorResonse);
    return res.status(500).json(err)
})

app.listen(port,()=>{
    console.log('admin server running port',port)
})

export default app;