const express=require('express');
const router=express.Router();
const aptitudeController=require('../controllers/aptitudeController');
router.get('/',function(req,res){
    return res.render('home');
});
router.get('/aptitude',aptitudeController.aptitude);
router.get('/aptitude/topicName/:topicName',aptitudeController.aptitudeQuestions);
router.post('/aptitude/:topicName/createQuestion',aptitudeController.createQuestions);
module.exports=router;