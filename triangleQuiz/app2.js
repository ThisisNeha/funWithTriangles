const button = document.querySelector("#btn");
const outputScore = document.querySelector("#output");

const correctAnswers = ["90°", "right angled"];

function calculateScore() {
  let score = 0;
  let index = 0;
  const result = new FormData(document.getElementById("quiz-form"));
 
  for (let value of result.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  outputScore.innerText = "Your score is " + score;
  // console.log(calculateScore);
}

button.addEventListener("click", calculateScore);
