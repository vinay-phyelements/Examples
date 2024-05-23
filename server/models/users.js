const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
},
{
    versionKey: false 
}
)

const userModel=mongoose.model("users",userSchema)
module.exports=userModel;