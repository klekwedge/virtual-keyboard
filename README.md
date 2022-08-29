# Virtual keyboard

## Functional requirements:
- design - at your discretion
- initially the index.html file must be empty (all required elements are generated using JS)
- pressing the button on the physical keyboard should highlight the pressed button on the virtual one:
  **There may be differences in keyboard button presses for different operating systems: windows and Mac OS. To avoid errors, you need to indicate on the page with the keyboard in which OS the keyboard was created.**
- If several buttons are pressed, then all pressed buttons are highlighted (there are no exceptions for ctrl-alt-shift):
- the virtual keyboard should be able to switch between Russian and English layouts (the keyboard shortcut is up to you), while the symbols of the selected language should be displayed on the buttons:
- the selected language should be saved after reloading the page. Buttons for changing the language should be indicated on the page with the keyboard, so that it would be clear to the verifier how to change the language on the keyboard
- button click animation
- clicks on the buttons with the mouse on the virtual keyboard and pressing the buttons on the physical keyboard output characters to the input (textarea) located on the page above the keyboard. Pressing the down-up-left-right arrows either displays the corresponding arrow in the input, or implements navigation through the input, pressing `enter` should carry out a carriage return, `tab` creates a horizontal indent, when pressing other function keys in the input, characters are not displayed, `backspace` deletes the character before the cursor, `del` deletes the character after the cursor. The remaining `shift`, `alt`, `ctrl`, `caps lock`, `space` should work like in a real keyboard.

## Technical requirements
- should work in latest chrome version
- use of jQuery and other libraries is not allowed
- Bootstrap and other CSS frameworks are not allowed
- Angular/React/Vue and other frameworks are not allowed
- you can use CSS preprocessors
- use [eslint (eslint-config-airbnb-base)](https://eslint.org/)
- the working application must be hosted on GitHub Pages (https://pages.github.com/), this will happen automatically when the `gh-pages` branch is created. After that, the page will be available at the address of the form https://your-github-account.github.io/name-repository