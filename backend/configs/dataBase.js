import mongoose, { connect } from "mongoose";

export const dataBase = async()=>{
    try {
        
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DataBase Connect successfully...");
    } catch (error) {
        console.log("DatBase Connect Error :- ",error.message);
    }
}