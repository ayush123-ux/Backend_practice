import express from "express";
import cors from "cors";  //allow to change setting thing
import cookieParser from "cookie-parser";  
const app = express();


app.use(cors());
app.use(express.json({limit:"16kb"}))  //limit krdi ki itna hi data aa skta h ek baar me 
app.use(express.urlencoded({extended:true , limit:"16kb"}))  //jab url se data aay to usse encode special character kr deta h ..akela encoded bhi likh skte ya or bhi object de skte ho

app.use(express.static("public"))  //public folder me data rakh lo to use kr paao

app.use(cookieParser)    //server ke cookies pr crud operation ke liye

export default app;