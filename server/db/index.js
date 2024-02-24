import mongoose from "mongoose";
import { errorHandler } from "../utils/errorHandler.js";
import { DB_NAME } from "../../constants.js";

export const connectDB= async ()=>{
    try {
        await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`);
        console.log(`Mongodb connection successful`);
    } catch (error) {
        const errorObject=errorHandler(500,error.message);
        console.log(error);
    }
}