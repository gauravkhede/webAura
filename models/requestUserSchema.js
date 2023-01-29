const mongoose=require('mongoose');
const requestUserSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        unique:true
    }
},{
    timestamps:true
});
const RequestUser=mongoose.model('RequestUser',requestUserSchema);
module.exports=RequestUser;