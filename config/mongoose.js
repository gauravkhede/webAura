// w5rMT3HkMgmMqx6w
//web_aura

const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://web_aura:w5rMT3HkMgmMqx6w@cluster0.k3vr1vi.mongodb.net/web_aura?retryWrites=true");


const db=mongoose.connection;


db.on('error',console.error.bind(console,'Error connecting to mongoDb'));

db.once('open',function(){
    console.log('Connected to database:: MongoDB');
});
module.exports=db;