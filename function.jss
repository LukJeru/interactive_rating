let numbers = document.getElementByClass("num");

numbers.addEventListener("click", changeColor);

const changeColor = (event) => {
  document.event.target.style.backgroundColor = orange;
}


let submitButton = document.getElementByClass("submit");

const changeStates = (event) => {
  document.getElementByClass("container").style.visibility = "hidden";
  document.getElementByClass("thankYou").style.visibility = "visible";
};

submitButton.addEventListener("click", changeStates);
