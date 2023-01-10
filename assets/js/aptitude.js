
function getOption(event,optionNumber,correctAnswer,questionNumber,totalQuestions){
    console.log(optionNumber,correctAnswer,questionNumber,totalQuestions);
    if(optionNumber!=correctAnswer){
        event.target.style.backgroundColor="red";
        event.target.style.color="#0BF4E9";
        setTimeout(function(){
            event.target.style.backgroundColor="white";
            event.target.style.color="black";
        },2000);
        // console.log(e.target);
    }
    else{
        event.target.style.backgroundColor="green";
        event.target.style.color="blue";
        setTimeout(function(){
            event.target.style.backgroundColor="white";
            event.target.style.color="black";
        },2000);
    }
}