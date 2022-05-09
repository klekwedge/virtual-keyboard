"use strict";
import { keyboard, specialKeyArr } from "./modules/keyboard-data";

document.addEventListener("DOMContentLoaded", () => {
  let registerMode = "lowercase";

  function createElement(tag, parent, classes) {
    const newElement = document.createElement(tag);

    classes = classes.split(" ");
    if (classes !== "") {
      classes.forEach((elementClass) => {
        newElement.classList.add(elementClass);
      });
    }

    parent.append(newElement);
  }

  createElement("div", document.body, "_container");

  const textarea = document.createElement("textarea");
  textarea.classList.add("keyboard__textarea");
  textarea.autofocus = true;
  document.querySelector("._container").append(textarea);

  textarea.addEventListener("blur", (event) => {
    textarea.autofocus = true;
    event.target.focus();
  });

  const keyboardKeys = document.createElement("div");
  keyboardKeys.classList.add("keyboard__keys");
  document.querySelector("._container").append(keyboardKeys);

  createKeys(registerMode);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
    }
    addNewSymbol(event);
  });

  function createKeys(registerMode) {
    keyboardKeys.innerHTML = "";
    for (let i = 0; i < keyboard.length; i++) {
      const keyboardRow = document.createElement("ul");
      keyboardRow.classList.add("keyboard__row");
      document.querySelector(".keyboard__keys").append(keyboardRow);

      for (let j = 0; j < keyboard[i].length; j++) {
        const keyboardKey = document.createElement("li");

        if (registerMode === "lowercase") {
          keyboardKey.textContent = keyboard[i][j][1];
        } else {
          keyboardKey.textContent = keyboard[i][j][2];
        }

        keyboardKey.classList.add("keyboard__key", `${keyboard[i][j][0]}`);
        keyboardRow.append(keyboardKey);

        keyboardKey.addEventListener("click", (event) => {
          console.log(specialCharacterCheck(event.target.classList[1]));

          if (!specialCharacterCheck(event.target.classList[1])) {
            textarea.textContent += keyboardKey.textContent;
          }
        });
      }
    }
  }

  function specialCharacterCheck(keyDesignation) {
    return specialKeyArr.includes(keyDesignation);
  }

  function addNewSymbol(event) {
    document.querySelector(`.${event.code}`).style.backgroundColor = "#02524C";
    if (!specialCharacterCheck(event.code)) {
      textarea.textContent += event.key;
    } else {
      switch (event.code) {
        case "CapsLock":
          if (registerMode === "lowercase") {
            registerMode = "uppercase";
          } else {
            registerMode = "lowercase";
          }
          createKeys(registerMode);

          break;
        case "Enter":
          textarea.textContent += "\n";
          break;
        case "Delete":
          // textarea.textContent = "";
          break;
        case "Backspace":
          textarea.textContent = textarea.textContent.substring(
            0,
            textarea.textContent.length - 1
          );
          break;
        case "Space":
          textarea.textContent += " ";
          break;
        case "Tab":
          console.log("!");
          textarea.textContent += "        ";
          console.log(textarea.textContent);
          break;
      }
    }

    setTimeout(() => {
      document.querySelector(`.${event.code}`).style.backgroundColor =
        "#128277";
    }, 100);
  }
});
