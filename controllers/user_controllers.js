const User=require('../models/userSchema');
module.exports.createSession=function(req,res){
    //To DO Later
    if(req.body.inputPassword!=req.body.inputConfirmPassword){
        console.log('Password and confirm Password did not match.')
        return res.redirect('back');
    }
    User.findOne({ email:req.body.inputEmail},function(err,user){
        if(err){ console.log('error in findng user in signing in'); return }
        if(!user){
            User.create({
                name:req.body.inputName,
                email:req.body.inputEmail,
                password:req.body.inputPassword,
                phone:req.body.inputPhone

            },function(err,user){
                if(err){ console.log('error in creating user while signing up'); return }
                console.log('User created a successfully', user);
                return res.redirect('/');
            });
        }else{
            console.log('email already present');
            return res.redirect('back');
        }
    });
}
module.exports.logIn=function(req,res){
    return res.render('login');
}
module.exports.signUp=function(req,res){
    return res.render('signup');
}