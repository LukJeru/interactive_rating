let numbers = document.getElementsByClassName("num")[0];

function changeColor() {
  event.target.style.backgroundColor = "red";
}

numbers.addEventListener("click", changeColor);

let submitButton = document.getElementById("submit");

const changeStates = () => {
  document.getElementById("container").style.visibility = "hidden";
  document.getElementById("thankYou").style.visibility = "visible";
};

submitButton.addEventListener("click", changeStates);
