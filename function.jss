let numbers = document.getElementById("numbers");

function changeColor() {
  event.target.style.backgroundColor = "red";
  numbers.removeEventListener("click", changeColor)
}


numbers.addEventListener("click", changeColor);


let submitButton = document.getElementById("submit");

const changeStates = () => {
  document.getElementById("container").style.visibility = "hidden";
  document.getElementById("thankYou").style.visibility = "visible";
};

submitButton.addEventListener("click", changeStates);
