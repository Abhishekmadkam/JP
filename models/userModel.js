import mongoose from "mongoose";
import validator from "validator";

//schema
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Name is Require']
    },
    lastname:{
       type:String,
    },
    email:{
        type:String,
        required:[true,'Email is require'],
        unique:true,
        validate: validator.isEmail
    },
    password:{
        type:String,
        required:[true,'password is require']
     },
     location:{
        type:String,
        default:'India'
     }
}, {timestamps:true}
);

export default mongoose.model('User',userSchema)
