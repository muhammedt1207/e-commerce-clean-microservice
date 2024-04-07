import server from './presentation/server'
import dbConnection from './infrastructure/dataBase/monogdb/dbConnection'


(async()=>{
    try {
        server;
        await dbConnection().catch((error:any)=>{
            console.log(error?.message)
            process.exit(1)
        })
    } catch (error:any) {
        console.log(error?.message)
        process.exit(1)
    }
})()