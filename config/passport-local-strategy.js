const passport=require('passport');
const User=require('../models/userSchema');

const LocalStrategy = require('passport-local').Strategy;

//authentication using passport
passport.use( new LocalStrategy({
    usernameField: 'email',
    passReqToCallback: true,

},function(email,password,done){
                //find a user and establish the identity
                User.findOne({email: email},function(err,user){
                    if(err){ return done(err);}
                    if(!user || user.password!=password){
                        console.log('Invalid Username or password');
                        return done(null,false);
                    }
                    return done(null,user);

                })
}));

//serializing the user to decide which key to keep in cookie
passport.serializeUser(function(user,done){
    return done(null,user.id);
});



//deserializing the user  from the key in the cookie
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){console.log('Error in finding user --> passport'); return done(err);}
        return done(null,user);
    })
});
//check if the user is authenticated
passport.checkAuthentication = function(req,res,next){
    //if user is signed in pass on the request to next function(controller's action)
    if(req.isAuthenticated()){
        return next();
    }
    //if the user is not signed in
    return res.redirect('/users/user-signin');
}
passport.setAuthenticatedUser=function(req,res,next){
    //req.user contains current signin user from session cookie we are just sending it to locals for the views
    res.locals.user=req.user;
    next();
}
module.exports=passport;