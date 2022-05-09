"use strict";
import { keyboard, specialKeyArr } from "./modules/keyboard-data";

document.addEventListener("DOMContentLoaded", () => {
  let language;
  if (Boolean(localStorage.getItem("lang"))) {
    language = localStorage.getItem("lang");
  } else {
    language = "ru";
    localStorage.setItem("lang", "ru");
  }
  let registerMode = "lowercase";

  const keyboardContainer = document.createElement("div");
  keyboardContainer.classList.add("_container");
  document.body.append(keyboardContainer);

  const textarea = document.createElement("textarea");
  textarea.classList.add("keyboard__textarea");
  textarea.autofocus = true;
  keyboardContainer.append(textarea);

  textarea.addEventListener("blur", (event) => {
    textarea.autofocus = true;
    event.target.focus();
  });

  const keyboardKeys = document.createElement("div");
  keyboardKeys.classList.add("keyboard__keys");
  keyboardContainer.append(keyboardKeys);

  createKeys(registerMode, language);

  const keyboardInfo = document.createElement("div");
  keyboardInfo.classList.add("keyboard__info");
  keyboardInfo.innerHTML = `<h2>Клавиатура создана в операционной системе Windows </h2> 
  <h2>Для переключения языка комбинация: левыe shift + alt </h2>`;
  keyboardContainer.append(keyboardInfo);

  document.addEventListener("keydown", (event) => {
    event.preventDefault();

    // if (event.code === "Tab") {
    //   event.preventDefault();
    // }

    document
      .querySelector(`li[data-key-name='${event.code}']`)
      .classList.add("_active");

    if (event.code === "ShiftLeft") {
      document.addEventListener("keyup", (event) => {
        if (event.code === "AltLeft") {
          language = language === "ru" ? "en" : "ru";
          localStorage.setItem("lang", language);
          createKeys(registerMode, language);
        }
      });
    }

    addNewSymbol(event.code, event.key);
  });

  document.addEventListener("keyup", (event) => {
    document
      .querySelector(`li[data-key-name='${event.code}']`)
      .classList.remove("_active");
  });

  function createKeys(registerMode, language) {
    keyboardKeys.innerHTML = "";
    for (let i = 0; i < keyboard.length; i++) {
      const keyboardRow = document.createElement("ul");
      keyboardRow.classList.add("keyboard__row");
      document.querySelector(".keyboard__keys").append(keyboardRow);

      for (let j = 0; j < keyboard[i].length; j++) {
        const keyboardKey = document.createElement("li");

        if (registerMode === "lowercase" && language === "ru") {
          keyboardKey.textContent = keyboard[i][j][1];
        } else if (registerMode === "uppercase" && language === "ru") {
          keyboardKey.textContent = keyboard[i][j][2];
        } else if (registerMode === "lowercase" && language === "en") {
          keyboardKey.textContent = keyboard[i][j][3];
        } else if (registerMode === "uppercase" && language === "en") {
          keyboardKey.textContent = keyboard[i][j][4];
        }

        keyboardKey.classList.add("keyboard__key");
        keyboardKey.setAttribute("data-key-name", `${keyboard[i][j][0]}`);
        keyboardRow.append(keyboardKey);

        keyboardKey.addEventListener("click", (event) => {
          addNewSymbol(event.target.dataset.keyName, event.target.textContent);
        });
      }
    }
  }

  function specialCharacterCheck(keyDesignation) {
    return specialKeyArr.includes(keyDesignation);
  }

  function addNewSymbol(keyCode, keyName) {
    if (!specialCharacterCheck(keyCode)) {
      textarea.value += keyName;
    } else {
      switch (keyCode) {
        case "CapsLock":
          if (registerMode === "lowercase") {
            registerMode = "uppercase";
          } else {
            registerMode = "lowercase";
          }
          createKeys(registerMode, language);

          break;
        case "Enter":
          textarea.value += "\n";
          break;
        case "Delete":
          // textarea.value = "";
          break;
        case "Backspace":
          textarea.value = textarea.value.substring(
            0,
            textarea.value.length - 1
          );
          break;
        case "Space":
          textarea.value += " ";
          break;
        case "Tab":
          textarea.value += "        ";
          break;
        case "ArrowLeft":
          moveBack();
          break;
        case "ArrowRight":
          moveForward();
          break;
      }
    }
    // console.log(getCursorPosition(textarea));
  }
  // move forward
  // move back
  function moveForward() {
    const el = document.querySelector("textarea");
    el.selectionStart++;
    el.selectionEnd = el.selectionStart;
  }

  function moveBack() {
    const el = document.querySelector("textarea");
    if (el.selectionStart !== 0) {
      el.selectionStart--;
      el.selectionEnd = el.selectionStart;
    }
  }
});
