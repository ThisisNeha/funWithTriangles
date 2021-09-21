InputEvent, btn.output;
const inputs = document.querySelectorAll(".input");
const button = document.querySelector("#btn");
const output = document.querySelector("#output");

function productOfBaseAndHeight(base, height) {
  const product = base * height;
  return product;
}

function calculateAreaOfTriangle() {
  const product = productOfBaseAndHeight(
    Number(inputs[0].value),
    Number(inputs[1].value)
  );
const area = product / 2 ;
  output.innerText= "The area of triangle is " + area +" .";
}

button.addEventListener("click", calculateAreaOfTriangle);
