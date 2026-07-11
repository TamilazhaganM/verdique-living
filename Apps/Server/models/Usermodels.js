import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    role:{
        type:String,
        default:"user",
        enum:["user","admin"]
    },
    refreshToken:String,
    isVerified:{
        type:Boolean,
        default:false
    },
    passwordResetToken:String,
    passwordResetExpires:Date,
    profileImage:String,

},
{timestamps:true})

const User =mongoose.model("User",userSchema)

 export default User;