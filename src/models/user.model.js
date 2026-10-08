import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema({
username:{
    type:String,
    required:true,
    unique:true,
    LowerCase:true,
    trim:true,
    index:true     //easy serchable
},
email:{
    type:String,
    required:true,
    unique:true,
    LowerCase:true,
    trim:true,
},
fullname:{
    type:String,
    required:true,
    trim:true,
    index:true     //easy serchable
},
avatar:{
    type:String,      //cloudinary url ..image url 
    required:true,
},
coverimage:{
    type:String,
},
watchHistory:[
   {
    type:Schema.Types.ObjectId,
    ref:video
   }
],
password:{
    type:String,
    required:[true,'password is required!']
},
refreshToken:{
    type:String,

},



},{timestamps:true})


//jab ham save krenge tab hi chalega tye ..isme bhi password har baar encrypt nhi hoga isliye if likha h jab password ko change ya add kr rhe h tabhi password encrypt hoga not evrytime on small changement on other things
userSchema.pre("save", async function (next){
    if(!this.isModified("password")) return next();
this.password = bcrypt.hash(this.password,10)
next()
})
 
 export const User = mongoose.model("User",userSchema)