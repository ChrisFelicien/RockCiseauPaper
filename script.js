const listOption = document.querySelector(".option");
const message = document.querySelector(".message");

const messages = (parent, result) => {
  const text = `Thank you for playing you ${result} the game`;
  return (parent.textContent = text);
};

const result = (firstPlayer, secondPlayer, result) => {
  //

  if (firstPlayer.classList === secondPlayer.classList) {
    document.body.style.backgroundColor = "blue";
    messages(message, "Draw game");
  } else if (
    firstPlayer.classList.contains("paper") &&
    secondPlayer.classList.contains("rock")
  ) {
    document.body.style.backgroundColor = "green";
    result = "Win";
    messages(message, result);
  } else if (
    firstPlayer.classList.contains("rock") &&
    secondPlayer.classList.contains("scissors")
  ) {
    document.body.style.backgroundColor = "green";
    result = "Win";
    messages(message, result);
  } else if (
    firstPlayer.classList.contains("scissors") &&
    secondPlayer.classList.contains("paper")
  ) {
    document.body.style.backgroundColor = "green";
    result = "Win";
    messages(message, result);
  } else {
    document.body.style.backgroundColor = "red";
    result = "Loose";
    messages(message, result);
  }
};

listOption.addEventListener("click", (e) => {
  // Getting the choice of player

  const randomNumber = Math.floor(Math.random() * listOption.children.length);
  const userChoice = e.target.closest("li");
  const computerChoice = listOption.children[randomNumber];
  //   Checking the result
  result(userChoice, computerChoice);
});
