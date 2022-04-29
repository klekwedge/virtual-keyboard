"use strict";

const keyboard = [
  [
    ["Backquote", "ё", "Ё", "`", "~"],
    ["Digit1", "1", "!", "1", "!"],
    ["Digit2", "2", "'", "2", "@"],
    ["Digit3", "3", "№", "3", "#"],
    ["Digit4", "4", ";", "4", "$"],
    ["Digit5", "5", "%", "5", "%"],
    ["Digit6", "6", ":", "6", "^"],
    ["Digit7", "7", "?", "7", "&"],
    ["Digit8", "8", "*", "8", "*"],
    ["Digit9", "9", "(", "9", "("],
    ["Digit0", "0", ")", "0", ")"],
    ["Minus", "-", "_", "-", "_"],
    ["Equal", "=", "+", "=", "+"],
    ["Backspace", "Backspace", "Backspace", "Backspace", "Backspace"],
  ],
  [
    ["Tab", "Tab", "Tab", "Tab", "Tab"],
    ["KeyQ", "й", "Й", "q", "Q"],
    ["KeyW", "ц", "Ц", "w", "W"],
    ["KeyE", "у", "У", "e", "E"],
    ["KeyR", "к", "К", "r", "R"],
    ["KeyT", "е", "Е", "t", "T"],
    ["KeyY", "н", "Н", "y", "Y"],
    ["KeyU", "г", "Г", "u", "U"],
    ["KeyI", "ш", "Ш", "i", "I"],
    ["KeyO", "щ", "Щ", "o", "O"],
    ["KeyP", "з", "З", "p", "P"],
    ["BracketLeft", "х", "Х", "[", "{"],
    ["BracketRight", "ъ", "Ъ", "]", "}"],
    ["Backslash", "\\", "/", "\\", "|"],
    ["Delete", "Del", "Del", "Del", "Del"],
  ],
  [
    ["CapsLock", "CapsLock", "CapsLock", "CapsLock", "CapsLock", "CapsLock"],
    ["KeyA", "ф", "Ф", "a", "A"],
    ["KeyS", "ы", "Ы", "s", "S"],
    ["KeyD", "в", "В", "d", "D"],
    ["KeyF", "а", "А", "f", "F"],
    ["KeyG", "п", "П", "g", "G"],
    ["KeyH", "р", "Р", "h", "H"],
    ["KeyJ", "о", "О", "j", "J"],
    ["KeyK", "л", "Л", "k", "K"],
    ["KeyL", "д", "Д", "l", "L"],
    ["Semicolon", "ж", "Ж", ";", ":"],
    ["Quote", "э", "Э", "'", "'"],
    ["Enter", "Enter", "Enter", "Enter", "Enter"],
  ],
  [
    ["ShiftLeft", "Shift", "Shift", "Shift", "Shift"],
    ["KeyZ", "я", "Я", "z", "Z"],
    ["KeyX", "ч", "Ч", "x", "X"],
    ["KeyC", "с", "С", "c", "C"],
    ["KeyV", "м", "М", "v", "V"],
    ["KeyB", "и", "И", "b", "B"],
    ["KeyN", "т", "Т", "n", "N"],
    ["KeyM", "ь", "Ь", "m", "M"],
    ["Comma", "б", "Б", ".", "<"],
    ["Period", "ю", "Ю", ",", ">"],
    ["Slash", ".", ",", "/", "?"],
    ["ArrowUp", "▲", "▲", "▲", "▲"],
    ["ShiftRight", "Shift", "Shift", "Shift", "Shift"],
  ],
  [
    ["ControlLeft", "Ctrl", "Ctrl", "Ctrl", "Ctrl"],
    ["MetaLeft", "Win", "Win", "Win", "Win"],
    ["AltLeft", "Alt", "Alt", "Alt", "Alt"],
    ["Space", " ", " ", " ", " "],
    ["AltRight", "Alt", "Alt", "Alt", "Alt"],
    ["ArrowLeft", "◄", "◄", "◄", "◄"],
    ["ArrowDown", "▼", "▼", "▼", "▼"],
    ["ArrowRight", "►", "►", "►", "►"],
    ["ControlRight", "Ctrl", "Ctrl", "Ctrl", "Ctrl"],
  ],
];

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
createElement(
  "textarea",
  document.querySelector("._container"),
  "keyboard__textarea"
);
createElement("div", document.querySelector("._container"), "keyboard__keys");

for (let i = 0; i < keyboard.length; i++) {
  const keyboardRow = document.createElement("ul");
  keyboardRow.classList.add("keyboard__row");
  document.querySelector(".keyboard__keys").append(keyboardRow);

  for (let j = 0; j < keyboard[i].length; j++) {
    const keyboardKey = document.createElement("li");
    keyboardKey.textContent = keyboard[i][j][1];
    keyboardKey.classList.add("keyboard__key");
    keyboardRow.append(keyboardKey);

    keyboardKey.addEventListener("click", () => {
      document.querySelector(".keyboard__textarea").textContent +=
        keyboardKey.textContent;
    });
  }
}
