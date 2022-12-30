const Question=require('../models/questionSchema');
module.exports.aptitude=function(req,res){
    
    return res.render('aptitude',{
        topicName:undefined,
        allQuestions:[{}]
    });
}
module.exports.aptitudeQuestions=async function(req,res){
    console.log(req.params.topicName);
    let allQuestions=await Question.find({topicName:req.params.topicName});
    return res.render('aptitude',{
        topicName:req.params.topicName,
        allQuestions:allQuestions
    })
}
module.exports.createQuestions=async function(req,res){
    const isExist=await Question.find({topicName:req.params.topicName,question:req.query.question});
    console.log(isExist," is the isExist")
    if(isExist.length!=0){
        return res.json(200,{
            message:'Request Denied',
            data:{
                allQuestions:[{}],
            }
        });
    }else{
        await Question.create({
            topicName:req.params.topicName,
            question:req.query.question,
            option1:req.query.option1,
            option2:req.query.option2,
            option3:req.query.option3,
            option4:req.query.option4,
            correctAnswer:req.query.correctAnswer
        },function(err,newQuestion){
            return res.json(200,{
                message:'Request Successfull',
                data:{
                    newQuestion:newQuestion,
                }
            });
        })
        
    }
    
}