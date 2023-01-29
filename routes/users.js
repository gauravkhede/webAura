const express=require('express');
const router=express.Router();
const userController=require('../controllers/user_controllers');    
router.post('/create-session',userController.createSession);
module.exports=router;
