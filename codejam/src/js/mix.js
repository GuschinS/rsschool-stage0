import { selectedCard } from "./card-selection";
import { selectedGame } from "./game-selection";
import ancientsData from "./ancients";
import cardsDataGreen from "./green-specification";
import cardsDataBrown from "./Brown-specification";
import cardsDataBlue from "./Blue-specification";

const score = document.querySelector(".score");
const start = document.querySelector(".start");
const green = document.querySelectorAll(".green");
const brown = document.querySelectorAll(".brown");
const blue = document.querySelectorAll(".blue");
const back = document.querySelector(".back");
const front = document.querySelector(".front");

let array;

const shuffle = (array) => {
  array.sort(() => Math.random() - 0.5);
};

const mixing = () => {
  let arrayGreen = [];
  let arrayBrown = [];
  let arrayBlue = [];
  let arrayOne = [];
  let arrayTwo = [];
  let arrayThree = [];
  ancientsData.forEach((el) => {
    let greenSum;
    let brownSum;
    let blueSum;
    if (selectedCard === el.id) {
      green[0].textContent = el.firstStage.greenCards;
      green[1].textContent = el.secondStage.greenCards;
      green[2].textContent = el.thirdStage.greenCards;
      greenSum =
        el.firstStage.greenCards +
        el.secondStage.greenCards +
        el.thirdStage.greenCards;
      brown[0].textContent = el.firstStage.brownCards;
      brown[1].textContent = el.secondStage.brownCards;
      brown[2].textContent = el.thirdStage.brownCards;
      brownSum =
        el.firstStage.brownCards +
        el.secondStage.brownCards +
        el.thirdStage.brownCards;
      blue[0].textContent = el.firstStage.blueCards;
      blue[1].textContent = el.secondStage.blueCards;
      blue[2].textContent = el.thirdStage.blueCards;
      blueSum =
        el.firstStage.blueCards +
        el.secondStage.blueCards +
        el.thirdStage.blueCards;
      score.style.opacity = "1";
      front.style.opacity = "0";

      back.style.cursor = "pointer";

      const separation = () => {
        arrayOne.push(arrayGreen.splice(0, el.firstStage.greenCards));
        arrayOne.push(arrayBrown.splice(0, el.firstStage.brownCards));
        arrayOne.push(arrayBlue.splice(0, el.firstStage.blueCards));
        arrayOne = arrayOne.flat();
        arrayTwo.push(arrayGreen.splice(0, el.secondStage.greenCards));
        arrayTwo.push(arrayBrown.splice(0, el.secondStage.brownCards));
        arrayTwo.push(arrayBlue.splice(0, el.secondStage.blueCards));
        arrayTwo = arrayTwo.flat();
        arrayThree.push(arrayGreen.splice(0, el.thirdStage.greenCards));
        arrayThree.push(arrayBrown.splice(0, el.thirdStage.brownCards));
        arrayThree.push(arrayBlue.splice(0, el.thirdStage.blueCards));
        arrayThree = arrayThree.flat();
        shuffle(arrayOne);
        shuffle(arrayTwo);
        shuffle(arrayThree);
        array = arrayOne.concat(arrayTwo, arrayThree);
        back.style.opacity = "1";

        // console.log

        array.forEach((el) => {
          for (let i = 0; i < cardsDataGreen.length; i++) {
            if (el === cardsDataGreen[i].cardFace) {
              console.log(cardsDataGreen[i].id, cardsDataGreen[i].difficulty);
              return;
            }
          }
          for (let i = 0; i < cardsDataBrown.length; i++) {
            if (el === cardsDataBrown[i].cardFace) {
              console.log(cardsDataBrown[i].id, cardsDataBrown[i].difficulty);
              return;
            }
          }
          for (let i = 0; i < cardsDataBlue.length; i++) {
            if (el === cardsDataBlue[i].cardFace) {
              console.log(cardsDataBlue[i].id, cardsDataBlue[i].difficulty);
              return;
            }
          }
        });
      };

      if (selectedGame === "normal") {
        shuffle(cardsDataGreen);
        for (let i = 0; i < greenSum; i++) {
          arrayGreen.push(cardsDataGreen[i].cardFace);
        }
        shuffle(cardsDataBrown);
        for (let i = 0; i < brownSum; i++) {
          arrayBrown.push(cardsDataBrown[i].cardFace);
        }
        shuffle(cardsDataBlue);
        for (let i = 0; i < blueSum; i++) {
          arrayBlue.push(cardsDataBlue[i].cardFace);
        }
      } else if (selectedGame === "easy") {
        shuffle(cardsDataGreen);
        cardsDataGreen.forEach((el) => {
          if (el.difficulty != "hard") {
            arrayGreen.push(el.cardFace);
          }
        });
        shuffle(cardsDataBrown);
        cardsDataBrown.forEach((el) => {
          if (el.difficulty != "hard") {
            arrayBrown.push(el.cardFace);
          }
        });
        shuffle(cardsDataBlue);
        cardsDataBlue.forEach((el) => {
          if (el.difficulty != "hard") {
            arrayBlue.push(el.cardFace);
          }
        });
      } else if (selectedGame === "hard") {
        shuffle(cardsDataGreen);
        cardsDataGreen.forEach((el) => {
          if (el.difficulty != "easy") {
            arrayGreen.push(el.cardFace);
          }
        });
        shuffle(cardsDataBrown);
        cardsDataBrown.forEach((el) => {
          if (el.difficulty != "easy") {
            arrayBrown.push(el.cardFace);
          }
        });
        shuffle(cardsDataBlue);
        cardsDataBlue.forEach((el) => {
          if (el.difficulty != "easy") {
            arrayBlue.push(el.cardFace);
          }
        });
      } else if (selectedGame === "very-hard") {
        shuffle(cardsDataGreen);
        cardsDataGreen.forEach((el) => {
          if (el.difficulty === "hard") {
            arrayGreen.push(el.cardFace);
          }
        });
        shuffle(cardsDataBrown);
        cardsDataBrown.forEach((el) => {
          if (el.difficulty === "hard") {
            arrayBrown.push(el.cardFace);
          }
        });
        // add missing normal
        cardsDataBrown.forEach((el) => {
          if (arrayBrown.length < brownSum && el.difficulty === "normal") {
            arrayBrown.push(el.cardFace);
          }
        });
        shuffle(arrayBrown);
        shuffle(cardsDataBlue);
        cardsDataBlue.forEach((el) => {
          if (el.difficulty === "hard") {
            arrayBlue.push(el.cardFace);
          }
        });
      } else if (selectedGame === "very-easy") {
        shuffle(cardsDataGreen);
        cardsDataGreen.forEach((el) => {
          if (el.difficulty === "easy") {
            arrayGreen.push(el.cardFace);
          }
        });
        shuffle(cardsDataBrown);
        cardsDataBrown.forEach((el) => {
          if (el.difficulty === "easy") {
            arrayBrown.push(el.cardFace);
          }
        });
        // add missing normal
        cardsDataBrown.forEach((el) => {
          if (el.difficulty === "normal" && arrayBrown.length < brownSum) {
            arrayBrown.push(el.cardFace);
          }
        });
        shuffle(arrayBrown);

        shuffle(cardsDataBlue);
        cardsDataBlue.forEach((el) => {
          if (el.difficulty === "easy") {
            arrayBlue.push(el.cardFace);
          }
        });
      }
      separation();
    }
  });
};

start.addEventListener("click", mixing);

export { array };
