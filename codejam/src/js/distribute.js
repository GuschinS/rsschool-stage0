import { array } from "./mix";
import cardsDataGreen from "./green-specification";
import cardsDataBrown from "./Brown-specification";
import cardsDataBlue from "./Blue-specification";

const green = document.querySelectorAll(".green");
const brown = document.querySelectorAll(".brown");
const blue = document.querySelectorAll(".blue");
const front = document.querySelector(".front");
const back = document.querySelector(".back");

const distribute = () => {
  while (array.length > 0) {
    let background = array.shift();
    cardsDataGreen.forEach((el) => {
      if (background === el.cardFace) {
        if (green[0].textContent > 0) {
          green[0].textContent = green[0].textContent - 1;
        } else if (green[1].textContent > 0) {
          green[1].textContent = green[1].textContent - 1;
        } else if (green[2].textContent > 0) {
          green[2].textContent = green[2].textContent - 1;
        }
      }
    });
    cardsDataBrown.forEach((el) => {
      if (background === el.cardFace) {
        if (brown[0].textContent > 0) {
          brown[0].textContent = brown[0].textContent - 1;
        } else if (brown[1].textContent > 0) {
          brown[1].textContent = brown[1].textContent - 1;
        } else if (brown[2].textContent > 0) {
          brown[2].textContent = brown[2].textContent - 1;
        }
      }
    });
    cardsDataBlue.forEach((el) => {
      if (background === el.cardFace) {
        if (blue[0].textContent > 0) {
          blue[0].textContent = blue[0].textContent - 1;
        } else if (blue[1].textContent > 0) {
          blue[1].textContent = blue[1].textContent - 1;
        } else if (blue[2].textContent > 0) {
          blue[2].textContent = blue[2].textContent - 1;
        }
      }
    });
    front.style.backgroundImage = `url(${background})`;
    front.style.opacity = "1";
    if (array.length === 0) {
      back.style.opacity = "0";
    }
    return;
  }
};

back.addEventListener("click", distribute);
