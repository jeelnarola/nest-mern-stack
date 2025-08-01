import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const myApp = express();
const {PORT} = process.env
myApp.use(express.json())
myApp.use(express.urlencoded({extended:true}))



myApp.listen(PORT,()=>{
    console.log("Sercer Start :- ",PORT);  
})