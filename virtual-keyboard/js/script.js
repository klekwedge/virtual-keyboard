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

  initKeys(registerMode, language);

  const keyboardInfo = document.createElement("div");
  keyboardInfo.classList.add("keyboard__info");
  keyboardInfo.innerHTML = `<h2>Клавиатура создана в операционной системе Windows </h2> 
  <h2>Для переключения языка комбинация: левыe shift + alt </h2>`;
  keyboardContainer.append(keyboardInfo);

  document.addEventListener("keydown", (event) => {
    event.preventDefault();

    document
      .querySelector(`li[data-key-name='${event.code}']`)
      .classList.add("_active");

    if (event.code === "ShiftLeft") {
      document.addEventListener("keyup", (event) => {
        if (event.code === "AltLeft") {
          language = language === "ru" ? "en" : "ru";
          localStorage.setItem("lang", language);
          changeKeys(registerMode, language);
        }
      });
    }

    addNewSymbol(event.code, event.key);
  });

  // let flagCapsLock = false;
  document.addEventListener("keyup", (event) => {
    if (event.code !== "CapsLock") {
      // console.log('oPa')
      document
        .querySelector(`li[data-key-name='${event.code}']`)
        .classList.remove("_active");
      // flagCapsLock = false;
    } else {
      // flagCapsLock = true;
    }
  });

  function initKeys(registerMode, language) {
    for (let i = 0; i < keyboard.length; i++) {
      const keyboardRow = document.createElement("ul");
      keyboardRow.classList.add("keyboard__row");
      keyboardRow.setAttribute("id", `keyboard__row-${i + 1}`);
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

  function changeKeys(registerMode, language) {
    for (let i = 0; i < keyboard.length; i++) {
      const keyboardRow = document.querySelectorAll(
        `#keyboard__row-${i + 1} li`
      );
      for (let j = 0; j < keyboardRow.length; j++) {
        if (registerMode === "lowercase" && language === "ru") {
          keyboardRow[j].textContent = keyboard[i][j][1];
        } else if (registerMode === "uppercase" && language === "ru") {
          keyboardRow[j].textContent = keyboard[i][j][2];
        } else if (registerMode === "lowercase" && language === "en") {
          keyboardRow[j].textContent = keyboard[i][j][3];
        } else if (registerMode === "uppercase" && language === "en") {
          keyboardRow[j].textContent = keyboard[i][j][4];
        }
      }
    }
  }

  function specialCharacterCheck(keyDesignation) {
    return specialKeyArr.includes(keyDesignation);
  }

  let flagCapsLock = true;
  function addNewSymbol(keyCode, keyName) {
    if (!specialCharacterCheck(keyCode)) {
      const buffSelectionStart = textarea.selectionStart;
      // console.log("Befor SelectionStart: " + textarea.selectionStart);

      textarea.value =
        textarea.value.slice(0, textarea.selectionStart) +
        keyName +
        textarea.value.slice(textarea.selectionStart);

      // console.log("After SelectionStart: " + textarea.selectionStart);
      // console.log("Value: " + textarea.value);

      textarea.selectionStart = buffSelectionStart + 1;
      textarea.selectionEnd = textarea.selectionStart;
    } else {
      switch (keyCode) {
        case "CapsLock":
       
          // console.log(document.querySelector(`li[data-key-name='${keyCode}']`));

          if (flagCapsLock) {
            document
              .querySelector(`li[data-key-name='${keyCode}']`)
              .classList.remove("_active");
            flagCapsLock = false;
          } else {
            flagCapsLock = true;
          }

          document
            .querySelector(`li[data-key-name='${keyCode}']`)
            .classList.toggle("_active");

          if (registerMode === "lowercase") {
            registerMode = "uppercase";
          } else {
            registerMode = "lowercase";
          }
          changeKeys(registerMode, language);
          break;
        case "Enter":
          textarea.value += "\n";
          break;
        case "Delete":
          if (textarea.value !== "") {
            const buffSelectionStart = textarea.selectionStart;

            textarea.value =
              textarea.value.slice(0, textarea.selectionStart) +
              textarea.value.slice(textarea.selectionStart + 1);

            textarea.selectionStart = buffSelectionStart;
            textarea.selectionEnd = textarea.selectionStart;
          } else {
            console.log("!");
          }

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
          textarea.value += "    ";
          break;
        case "ArrowLeft":
          moveBack();
          break;
        case "ArrowRight":
          moveForward();
          break;
      }
    }
  }

  function moveForward() {
    const etextareal = document.querySelector("textarea");
    textarea.selectionStart++;
    textarea.selectionEnd = textarea.selectionStart;
  }

  function moveBack() {
    if (textarea.selectionStart !== 0) {
      textarea.selectionStart--;
      textarea.selectionEnd = textarea.selectionStart;
      console.log(textarea.selectionStart);
    }
  }
});
