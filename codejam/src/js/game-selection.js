const buttons = document.querySelector(".game-difficulty");
const button = document.querySelectorAll(".game-difficulty button");
const start = document.querySelector(".start");
let selectedGame;

const selectionGame = (el) => {
  let selectionButton;
  if (el.target && el.target.matches(".very-easy")) {
    selectionButton = el.target;
    button.forEach((element) => {
      element.style.boxShadow = "";
    });
    selectionButton.style.boxShadow = "8px 8px 24px 0px rgba(255, 255, 255, 1)";
  } else if (el.target && el.target.matches(".easy")) {
    selectionButton = el.target;
    button.forEach((element) => {
      element.style.boxShadow = "";
    });
    selectionButton.style.boxShadow = "8px 8px 24px 0px rgba(255, 255, 255, 1)";
  } else if (el.target && el.target.matches(".normal")) {
    selectionButton = el.target;
    button.forEach((element) => {
      element.style.boxShadow = "";
    });
    selectionButton.style.boxShadow = "8px 8px 24px 0px rgba(255, 255, 255, 1)";
  } else if (el.target && el.target.matches(".hard")) {
    selectionButton = el.target;
    button.forEach((element) => {
      element.style.boxShadow = "";
    });
    selectionButton.style.boxShadow = "8px 8px 24px 0px rgba(255, 255, 255, 1)";
  } else if (el.target && el.target.matches(".very-hard")) {
    selectionButton = el.target;
    button.forEach((element) => {
      element.style.boxShadow = "";
    });
    selectionButton.style.boxShadow = "8px 8px 24px 0px rgba(255, 255, 255, 1)";
  }
  start.style.opacity = "1";
  start.style.cursor = "pointer";
  return (selectedGame = selectionButton.className);
};

buttons.addEventListener("click", selectionGame);

export { selectedGame };
