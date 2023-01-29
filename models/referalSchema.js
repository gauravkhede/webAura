const mongoose=require('mongoose');
const referalSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    referalCode:{
        type:String,
        required:true
    }
},{
    timestamps:true
});
const Referal=mongoose.model('Referal',referalSchema);
module.exports=Referal;