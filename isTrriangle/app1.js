const inputs = document.querySelectorAll(".input");
const button = document.querySelector("#btn");
const outputText= document.querySelector("#output");

function clickEventHandler(){
const sum = Number(inputs[0].value)+Number(inputs[1].value)+Number(inputs[2].value);
if(sum===180){
outputText.innerText="Yay! the angles form a triangle!";
}else{
    outputText.innerText="Oops! the angles doesn't form a triangle.";
}

}

button.addEventListener("click", clickEventHandler );