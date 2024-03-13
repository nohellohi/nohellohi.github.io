"use strict";

function randomColor() {
  let hexColor = "#";
  while (hexColor.length < 7) {
    hexColor += Math.trunc(Math.random() * 16).toString(16);
  }
  return hexColor;
}

//Lệnh lấy số ô người dùng nhập vào
let numberOfBox = 1;
const playingSpace = document.querySelector(".box-container");

document
  .querySelector("div button:first-child")
  .addEventListener("click", function () {
    let listClean = document.querySelectorAll(".box-container div");
    let arr = Array.from(listClean);
    for (let i = 0; i < arr.length; i++) {
      playingSpace.removeChild(arr[i]);
    }
    numberOfBox = document.querySelector("input").value;
    for (let i = 0; i < numberOfBox * numberOfBox; i++) {
      let newElement = document.createElement("div");
      newElement.style.width = (1 / numberOfBox) * 100 + "%";
      newElement.style.height = (1 / numberOfBox) * 100 + "%";
      newElement.addEventListener("mouseover", function () {
        newElement.style.backgroundColor = randomColor();
      });
      playingSpace.appendChild(newElement);
    }
  });
