let numbers = document.getElementById("numbers");

function changeColor() {
  for(let i = 0; i < 5; i++){
  numbers.style.background = "";
  numbers.children[i].style.backgroundColor = "";
  }
  event.target.style.backgroundColor = "hsl(217, 12%, 40%)";
  event.target.style.color = "white";
}

for(let i = 0; i < 5; i++){
numbers.children[i].addEventListener("click", changeColor);
}

let submitButton = document.getElementById("submit");

const changeStates = () => {
  document.getElementById("container").style.visibility = "hidden";
  document.getElementById("thankYou").style.visibility = "visible";
};

submitButton.addEventListener("click", changeStates);
