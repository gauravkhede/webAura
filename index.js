const express=require('express');
const app=express();
const port =8000;
const cors=require('cors');
const db=require('./config/mongoose');
//setting up the view engine
app.set('view engine','ejs');
app.set('views','./views');
//Using cors
app.use(cors());
app.use(express.urlencoded());
app.use(express.static('assets'));

//use express router
app.use('/',require('./routes'));
app.listen(port,function(err){
    if(err){
        console.log(`error in running the app at port : ${port}`);
    }
    console.log('app is running at the port 8000');
})