const express=require('express');
const router=express.Router();
const aptitudeController=require('../controllers/aptitudeController');
const userController=require('../controllers/user_controllers');
router.get('/',function(req,res){
    return res.render('home');
});
router.use('/users',require('./users'));
router.post('/login',userController.logIn);
router.get('/loginPage',userController.loginPage);
router.post('/signup',userController.signUp);
router.get('/signupPage',userController.signupPage);
router.post('/referral',userController.referral);
router.get('/aptitude',aptitudeController.aptitude);
router.get('/aptitude/topicName/:topicName',aptitudeController.aptitudeQuestions);
router.post('/aptitude/:topicName/createQuestion',aptitudeController.createQuestions);
module.exports=router;