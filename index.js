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
//used for session cookie
const session = require('express-session');
const passport= require('passport');
const passportLocal= require('./config/passport-local-strategy');

//use express router
app.use('/',require('./routes'));
app.use(session({
    name: 'webaura',
    //TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized:false,
    resave:false,
    cookie: {
        maxAge:(1000*60*100)
    }
    
}));
app.use(passport.setAuthenticatedUser);
app.listen(port,function(err){
    if(err){
        console.log(`error in running the app at port : ${port}`);
    }
    console.log('app is running at the port 8000');
})