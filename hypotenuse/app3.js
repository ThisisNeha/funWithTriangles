
const inputs = document.querySelectorAll(".input");
const button = document.querySelector("#btn");
const output = document.querySelector("#output");

function calculateSum(a, b){
const sumOfSquares= a*a + b*b ;
return sumOfSquares;
}

function calculateHypotenuse(){
const sumOfSquares = calculateSum(inputs[0].value, inputs[1].value);
const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
// console.log(lengthOfHypotenuse);
output.innerText = "The length of a hypotenuse is " + lengthOfHypotenuse.toFixed(2) + " cm.";
}

button.addEventListener("click", calculateHypotenuse)