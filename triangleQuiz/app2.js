const quizForm= document.querySelectorAll(".quiz-form");
const button = document.querySelector("#btn");
const outputScore = document.querySelector("#output");

const correctAnswers = ['90°', 'right angled']; 

function calculateScore(){
let score = 0;
let index= 0;
const quiz = new FormData(quizForm);
for (let value of quiz.values()){
    if(value===correctAnswers[index]){
        score ++;
    }
    index ++;
}
outputScore.innerText = "Your score is " + score;
// console.log(calculateScore);
}


button.addEventListener("click", calculateScore);