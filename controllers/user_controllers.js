const User=require('../models/userSchema');
const Referral=require('../models/referalSchema');
module.exports.createSession=function(req,res){
    //To DO Later
    
}
module.exports.logIn=function(req,res){
    User.find({email:req.body.inputEmail}, function(err,user){
        if(err){ console.log("Error in finding an email while logging in"); return;}
        if(!user){
            console.log("User not Present");
            return;
        }else{
            console.log(user[0].password," and ", req.body.inputPassword);
            console.log("affiliate code is", user[0].affiliateCode.referralCode);
            if(user[0].password==req.body.inputPassword){
                return res.render('landingPage',{
                    user:user[0],
                    referralCode:user[0].affiliateCode.referralCode
                });
            }
            return res.redirect('back');
        }
    }).populate('affiliateCode');
    
}
module.exports.referral=function(req,res){
    User.find({email:req.body.inputEmail},function(err,user){
        if(err){ console.log("Error in finding an email while referall SignUp"); return;}
        console.log(user," is the user");
        console.log(req.body.inputEmail," is the requested email");
        if(user.length==0){
            let newReferral= req.body.inputEmail.split("@")[0]+parseInt(Math.random()*10)+req.body.inputPhone+parseInt(Math.random()*10)+req.body.inputName+(Math.random()*10);
            Referral.find({referralCode:newReferral},function(err,referral){
                if(err){console.log("Error in finding a referral"); return;}
                if(referral.length==0){
                    Referral.create({referralCode:newReferral},function(err,referralCreated){
                        if(err){ console.log("error while creating referral"); return;}
                        User.create({
                            name:req.body.inputName,
                            email:req.body.inputEmail,
                            password:req.body.inputPassword,
                            phone:req.body.inputPhone,
                            affiliateCode:referralCreated
            
                        },function(err,newUser){
                            if(err){ console.log('error in creating user while referral '); return; }
                            console.log('User created a successfully', newUser);
                            console.log('referral code is ',newUser.referralCode);
                            referralCreated.user=newUser;
                            referralCreated.save();
                            return res.render('landingPage',{
                                referralCode:newReferral
                            });
                        })
                    })
                    
                }else{
                    console.log("You Already have a referral Code");
                    return res.redirect('back');
                }
            })
            
        }else{
            console.log("Email Id already present");
            return res.redirect("back");
        }
    })
}
module.exports.loginPage=function(req,res){
    return res.render('login');
}

module.exports.signUp=function(req,res){
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
module.exports.signupPage=function(req,res){
    return res.render('signup');
}