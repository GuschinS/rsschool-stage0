const ancients = document.querySelector(".ancients");
const ancientsDiv = document.querySelectorAll(".ancients div");
const button = document.querySelectorAll(".game-difficulty button");
const start = document.querySelector(".start");
const score = document.querySelector(".score");
let selectedCard;

const reset = () => {
  const green = document.querySelectorAll(".green");
  const brown = document.querySelectorAll(".brown");
  const blue = document.querySelectorAll(".blue");
  const front = document.querySelector(".front");
  const back = document.querySelector(".back");

  ancientsDiv.forEach((element) => {
    element.style.boxShadow = "";
  });
  green.forEach((element) => {
    element.textContent = "0";
  });
  brown.forEach((element) => {
    element.textContent = "0";
  });
  blue.forEach((element) => {
    element.textContent = "0";
  });
  start.style.opacity = "0";
  start.style.cursor = "default";
  front.style.opacity = "0";
  back.style.opacity = "0";
  back.style.cursor = "default";
  score.style.opacity = "0";
};

const selectionCard = (el) => {
  let ancient;
  if (el.target && el.target.matches(".azathoth")) {
    ancient = el.target;
    reset();
    ancient.style.boxShadow = "8px 8px 24px 0px rgba(255, 255, 255, 1)";
  } else if (el.target && el.target.matches(".cthulhu")) {
    ancient = el.target;
    reset();
    ancient.style.boxShadow = "8px 8px 24px 0px rgba(255, 255, 255, 1)";
  } else if (el.target && el.target.matches(".iogSothoth")) {
    ancient = el.target;
    reset();
    ancient.style.boxShadow = "8px 8px 24px 0px rgba(255, 255, 255, 1)";
  } else if (el.target && el.target.matches(".shubNiggurath")) {
    ancient = el.target;
    reset();
    ancient.style.boxShadow = "8px 8px 24px 0px rgba(255, 255, 255, 1)";
  }
  button.forEach((element) => {
    element.style.opacity = "1";
    element.style.cursor = "pointer";
    element.style.boxShadow = "";
  });
  return (selectedCard = ancient.className);
};

ancients.addEventListener("click", selectionCard);

export { selectedCard };
