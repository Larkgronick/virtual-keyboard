/* create textarea */
const textarea = document.createElement('textarea');
document.body.appendChild(textarea);
textarea.id = 'inputWindow';
const inputWindow = document.getElementById('inputWindow');
textarea.setAttribute('type', 'text');


/* prevent from loosing focus */
document.addEventListener('click', () => {
  document.getElementById('inputWindow').focus();
});

/* creating keyboard rows */
const sectionOne = document.createElement('section');
sectionOne.className = 'first-row';
document.body.appendChild(sectionOne);


const firstRow = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
firstRow.forEach((el) => {
  const button = document.createElement('button');
  button.innerHTML = el;
  sectionOne.appendChild(button);
});

const sectionTwo = document.createElement('section');
sectionTwo.className = 'second-row';
document.body.appendChild(sectionTwo);

const secondRow = ['Tab⇄', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'];
secondRow.forEach((el) => {
  const button = document.createElement('button');
  button.innerHTML = el;
  sectionTwo.appendChild(button);
});

const sectionThree = document.createElement('section');
sectionThree.className = 'third-row';
document.body.appendChild(sectionThree);

const thirdRow = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"', 'Enter'];
thirdRow.forEach((el) => {
  const button = document.createElement('button');
  button.innerHTML = el;
  sectionThree.appendChild(button);
});

const sectionFour = document.createElement('section');
sectionFour.className = 'forth-row';
document.body.appendChild(sectionFour);

const forthRow = ['⇑Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '🠥', '⇑'];
forthRow.forEach((el) => {
  const button = document.createElement('button');
  button.innerHTML = el;
  sectionFour.appendChild(button);
});

const sectionFive = document.createElement('section');
sectionFive.className = 'fifth-row';
document.body.appendChild(sectionFive);

const fifthRow = ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Win', 'Ctrl', '🠤', '🠧', '🠦'];
fifthRow.forEach((el) => {
  const button = document.createElement('button');
  button.innerHTML = el;
  sectionFive.appendChild(button);
});

/* add information below keyboard */
const osInfo = document.createElement('div');
document.body.appendChild(osInfo);
osInfo.innerHTML = 'Клавиатура создана на ОС Windows';
const layoutInfo = document.createElement('div');
document.body.appendChild(layoutInfo);
layoutInfo.innerHTML = 'Смена раскладки виртуальной клавиатуры производится нажатием клавиш AltLeft + ShiftLeft.';

/* styling large buttons */
sectionOne.lastChild.id = 'backspace';
sectionTwo.firstChild.id = 'tab';
sectionThree.firstChild.id = 'capslock';
sectionThree.lastChild.id = 'enter';
sectionFour.firstChild.id = 'left-shift';
sectionFive.firstChild.id = 'left-ctrl';
sectionFive.childNodes[2].id = 'left-alt';
sectionFive.childNodes[3].id = 'spacebar';
sectionFive.childNodes[6].id = 'right-ctrl';

/* animation button pressing */

const firstRowCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'];
const secondRowCode = ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'];
const thirdRowCode = ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'];
const forthRowCode = ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'];
const fifthRowCode = ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'MetaRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];


document.addEventListener('keydown', (event) => {
  if (firstRowCode.includes(event.code)) {
    const pushed = firstRowCode.indexOf(event.code);
    sectionOne.childNodes[pushed].classList.add('active');
  }
  if (secondRowCode.includes(event.code)) {
    const pushed = secondRowCode.indexOf(event.code);
    sectionTwo.childNodes[pushed].classList.add('active');
  }
  if (thirdRowCode.includes(event.code)) {
    const pushed = thirdRowCode.indexOf(event.code);
    sectionThree.childNodes[pushed].classList.add('active');
  }
  if (forthRowCode.includes(event.code)) {
    const pushed = forthRowCode.indexOf(event.code);
    sectionFour.childNodes[pushed].classList.add('active');
  }
  if (fifthRowCode.includes(event.code)) {
    const pushed = fifthRowCode.indexOf(event.code);
    sectionFive.childNodes[pushed].classList.add('active');
  }
});

document.addEventListener('keyup', (event) => {
  if (firstRowCode.includes(event.code)) {
    const pushed = firstRowCode.indexOf(event.code);
    sectionOne.childNodes[pushed].classList.remove('active');
  }
  if (secondRowCode.includes(event.code)) {
    const pushed = secondRowCode.indexOf(event.code);
    sectionTwo.childNodes[pushed].classList.remove('active');
  }
  if (thirdRowCode.includes(event.code)) {
    const pushed = thirdRowCode.indexOf(event.code);
    sectionThree.childNodes[pushed].classList.remove('active');
  }
  if (forthRowCode.includes(event.code)) {
    const pushed = forthRowCode.indexOf(event.code);
    sectionFour.childNodes[pushed].classList.remove('active');
  }
  if (fifthRowCode.includes(event.code)) {
    const pushed = fifthRowCode.indexOf(event.code);
    sectionFive.childNodes[pushed].classList.remove('active');
  }
});


const lowerCase = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab⇄', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', '⇑Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '🠥', '⇑', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Win', 'Ctrl', '🠤', '🠧', '🠦'];
const shift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab⇄', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', '⇑Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '🠥', '⇑', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Win', 'Ctrl', '🠤', '🠧', '🠦'];
const capslock = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab⇄', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', '⇑Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '🠥', '⇑', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Win', 'Ctrl', '🠤', '🠧', '🠦'];
const russianLowerCase = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab⇄', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', '⇑Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '🠥', '⇑', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Win', 'Ctrl', '🠤', '🠧', '🠦'];
const russianShift = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '-', '+', 'Backspace', 'Tab⇄', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', '⇑Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '🠥', '⇑', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Win', 'Ctrl', '🠤', '🠧', '🠦'];
const russianCapsLock = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab⇄', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', '⇑Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '🠥', '⇑', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Win', 'Ctrl', '🠤', '🠧', '🠦'];


const buttons = document.querySelectorAll('button');
window.onload = function layoutLoad() {
  document.getElementById('inputWindow').focus(); /* set focus when page load */
  if (JSON.parse(window.localStorage.getItem('layout'))[15] === 'q' || JSON.parse(window.localStorage.getItem('layout'))[15] === null) {
    buttons.forEach((button, index) => {
      button.innerHTML = lowerCase[index];
    });
  }
  if (JSON.parse(window.localStorage.getItem('layout'))[15] === 'й') {
    buttons.forEach((button, index) => {
      button.innerHTML = russianLowerCase[index];
    });
  }
};


buttons.forEach((button) => {
  /* mouse click input */
  button.addEventListener('click', () => {
    function getPosition(el) {
      return el.value.slice(0, el.selectionStart).length;
    }
    const position = getPosition(document.getElementById('inputWindow')); // get caret position;


    function setCaretPosition(input, pos) { // set caret position
      if (input.setSelectionRange) {
        input.focus();
        input.setSelectionRange(pos, pos);
      }
    }

    const caption = textarea.value;
    const start = inputWindow.selectionStart;
    const end = inputWindow.selectionEnd;

    if (button.innerHTML === 'Backspace') {
      if (inputWindow.selectionEnd === position) {
        textarea.value = caption.slice(0, position - 1) + caption.slice(position, caption.length);
        setCaretPosition(textarea, position - 1);
      } else {
        textarea.value = caption.slice(0, start) + caption.slice(end, caption.length);
        setCaretPosition(textarea, position);
      }
    } else if (button.innerHTML === 'Del') {
      if (end === position) {
        textarea.value = caption.slice(0, position) + caption.slice(position + 1, caption.length);
        setCaretPosition(textarea, position);
      } else {
        textarea.value = caption.slice(0, start) + caption.slice(end, caption.length);
        setCaretPosition(textarea, position);
      }
    } else if (button.innerHTML === 'Enter') {
      if (end === position) {
        textarea.value = `${caption.slice(0, position)}\n${caption.slice(position, caption.length)}`;
        setCaretPosition(textarea, position + 1);
      } else {
        textarea.value = `${caption.slice(0, start)}\n${caption.slice(end, caption.length)}`;
        setCaretPosition(textarea, position);
      }
    } else if (button.innerHTML === ' ') {
      if (end === position) {
        textarea.value = `${caption.slice(0, position)} ${caption.slice(position, caption.length)}`;
        setCaretPosition(textarea, position + 1);
      } else {
        textarea.value = `${caption.slice(0, start)} ${caption.slice(end, caption.length)}`;
        setCaretPosition(textarea, position + 1);
      }
    } else if (button.innerHTML === 'Alt' || button.innerHTML === 'Ctrl' || button.innerHTML === 'Win') {
      textarea.value = `${caption.slice(0, position)}${caption.slice(position, caption.length)}`;
    } else if (button.innerHTML === '⇑Shift' || button.innerHTML === '⇑') {
      if (buttons[0].innerHTML === '`') {
        buttons.forEach((item, index) => {
          item.innerHTML = shift[index];
        });
      } else {
        buttons.forEach((item, index) => {
          item.innerHTML = lowerCase[index];
        });
      }
    } else if (button.innerHTML === 'CapsLock') {
      if (buttons[15].innerHTML === 'q') {
        buttons.forEach((item, index) => {
          item.innerHTML = capslock[index];
        });
      } else if (buttons[15].innerHTML === 'Q') {
        buttons.forEach((item, index) => {
          item.innerHTML = lowerCase[index];
        });
      } else if (buttons[15].innerHTML === 'й') {
        buttons.forEach((item, index) => {
          item.innerHTML = russianCapsLock[index];
        });
      } else if (buttons[15].innerHTML === 'Й') {
        buttons.forEach((item, index) => {
          item.innerHTML = russianLowerCase[index];
        });
      }
    } else if (button.innerHTML === 'Tab⇄') {
      textarea.value += '  ';
    } else if (button.innerHTML === '&lt;') {
      textarea.value += '<';
    } else if (button.innerHTML === '&gt;') {
      textarea.value += '>';
    } else if (button.innerHTML === '&amp;') {
      textarea.value += '&';
    } else {
      textarea.value += button.innerHTML;
    }
  });
});

document.addEventListener('keydown', (event) => {
  if (event.altKey && event.shiftKey) {
    if (buttons[0].innerHTML === '`') {
      buttons.forEach((item, index) => {
        item.innerHTML = russianLowerCase[index];
      });
      window.localStorage.setItem('layout', JSON.stringify(russianLowerCase));
    } else {
      buttons.forEach((item, index) => {
        item.innerHTML = lowerCase[index];
      });
      window.localStorage.setItem('layout', JSON.stringify(lowerCase));
    }
  }

  if (event.code === 'Tab') {
    textarea.value += '  ';
    event.preventDefault();
  }
  if (event.code === 'AltLeft' || event.code === 'AltRight') {
    event.preventDefault();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.shiftKey && event.altKey === false && buttons[15].innerHTML === 'q') {
    buttons.forEach((item, index) => {
      item.innerHTML = shift[index];
    });
  }
});

document.addEventListener('keyup', () => {
  if (buttons[15].innerHTML === 'Q') {
    buttons.forEach((item, index) => {
      item.innerHTML = lowerCase[index];
    });
  }
});

document.addEventListener('keydown', (event) => {
  if (event.shiftKey && event.altKey === false && buttons[15].innerHTML === 'й') {
    buttons.forEach((item, index) => {
      item.innerHTML = russianShift[index];
    });
  }
});

document.addEventListener('keyup', () => {
  if (buttons[15].innerHTML === 'Й') {
    buttons.forEach((item, index) => {
      item.innerHTML = russianLowerCase[index];
    });
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'CapsLock' && buttons[15].innerHTML === 'q') {
    buttons.forEach((item, index) => {
      item.innerHTML = capslock[index];
    });
  }
});

document.addEventListener('keyup', () => {
  if (buttons[15].innerHTML === 'Q') {
    buttons.forEach((item, index) => {
      item.innerHTML = lowerCase[index];
    });
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'CapsLock' && buttons[15].innerHTML === 'й') {
    buttons.forEach((item, index) => {
      item.innerHTML = russianCapsLock[index];
    });
  }
});

document.addEventListener('keyup', () => {
  if (buttons[15].innerHTML === 'Й') {
    buttons.forEach((item, index) => {
      item.innerHTML = russianLowerCase[index];
    });
  }
});
