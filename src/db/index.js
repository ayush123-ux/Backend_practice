import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async ()=>{
    try{
       const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
 console.log(`\n mongodb connected!! DB HOST ${connectionInstance.connection.host}`);    //poora hsot url de dega 
    }catch(error){
        console.log("connection error with mongodb",error);
        process.exit(1);  //can also write thro error to exit  process
    }
}

export default connectDB;