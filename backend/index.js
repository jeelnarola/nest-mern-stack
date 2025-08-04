import express from 'express'
import dotenv from 'dotenv'
import cookie from 'cookie-parser'
import { dataBase } from './configs/dataBase.js';
import { indexRoute } from './routers/indexRoute.js';

dotenv.config()

const myApp = express();
const {PORT} = process.env
myApp.use(express.json())
myApp.use(express.urlencoded({extended:true}))

myApp.use(cookie());
myApp.use("/api",indexRoute)

myApp.listen(PORT,()=>{
    console.log("Server Start :- ",PORT);
    dataBase()
})