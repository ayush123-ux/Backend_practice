import dotenv from "dotenv";  //ye kr lena 
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
dotenv.config({path:'./env'})

const app = express();

//2nd approach different file
import connectDB from "./db/index.js";

//because hamne async await use kiya toit return a promise so we need to handle it 

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`app is listening on port ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("mongodb connection failed!!",err)
})
























/*   1st approach for connecting
import express from "express";
const app = express();

//CONNECTING THE DATABASE
//always use async await and try for better error handlening
;( async()=>{ 
    try{
      await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

      application.on("error",(error)=>{  //if express me error h to 
        console.log("error",error);
        throw error
      })
    
    app.listen(process.env.PORT , ()=>{
        console.log(`app is listening on port ${process.env.PORT}`)
    })
}
    catch(error){
        console.log("error" ,error)
        throw err
    }
} )()     //IFFI BOLTE H isse seedhe execute ho jata h ;(for define)(call)
      */