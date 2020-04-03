
/*create textarea*/ 
let textarea = document.createElement('textarea');
document.body.appendChild(textarea);
textarea.id ='inputWindow';
textarea.setAttribute('type', 'text');

/*activate textarea when page loaded*/
window.onload = function() {
    document.getElementById("inputWindow").focus();
}

/*prevent from loosing focus*/
document.body.addEventListener('click', function(){
    document.getElementById("inputWindow").focus();
 });

/*creating keyboard rows*/
let sectionOne = document.createElement('section');
sectionOne.className = 'first-row';
document.body.appendChild(sectionOne);


let firstRow = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"];
firstRow.forEach(function(el) {
    let button = document.createElement("button");
    button.innerHTML = el;
    sectionOne.appendChild(button);
});

let sectionTwo = document.createElement('section');
sectionTwo.className = 'second-row';
document.body.appendChild(sectionTwo);

let secondRow = ["Tab⇄", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", 'Del'];
secondRow.forEach(function(el) {
    let button = document.createElement("button");
    button.innerHTML = el;
    sectionTwo.appendChild(button);
});

let sectionThree = document.createElement('section');
sectionThree.className = 'third-row';
document.body.appendChild(sectionThree);

let thirdRow = ['CapsLock', "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "\"", 'Enter'];
thirdRow.forEach(function(el) {
    let button = document.createElement("button");
    button.innerHTML = el;
    sectionThree.appendChild(button);
});

let sectionFour = document.createElement('section');
sectionFour.className = 'forth-row';
document.body.appendChild(sectionFour);

let forthRow = ["⇑Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "🠥", "⇑"];
forthRow.forEach(function(el) {
    let button = document.createElement("button");
    button.innerHTML = el;
    sectionFour.appendChild(button);
});

let sectionFive = document.createElement('section');
sectionFive.className = 'fifth-row';
document.body.appendChild(sectionFive);

let fifthRow = ["Ctrl", "Win", "Alt", " ", "Alt", "Win", "Ctrl", "🠤", "🠧", "🠦"]; 
fifthRow.forEach(function(el) {
    let button = document.createElement("button");
    button.innerHTML = el;
    sectionFive.appendChild(button);
});

/*styling large buttons*/
sectionOne.lastChild.id = 'backspace';
sectionTwo.firstChild.id = 'tab'
sectionThree.firstChild.id = 'capslock';
sectionThree.lastChild.id = 'enter';
sectionFour.firstChild.id = 'left-shift';
sectionFive.firstChild.id = 'left-ctrl';
sectionFive.childNodes[2].id = 'left-alt';
sectionFive.childNodes[3].id = 'spacebar';
sectionFive.childNodes[6].id = 'right-ctrl';

/*animation button pressing*/

let firstRowCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5','Digit6','Digit7', 'Digit8', 'Digit9','Digit0','Minus', 'Equal', 'Backspace'];
let secondRowCode = ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT','KeyY','KeyU', 'KeyI', 'KeyO','KeyP','BracketLeft', 'BracketRight', 'Backslash', 'Delete'];
let thirdRowCode = ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG','KeyH','KeyJ', 'KeyK', 'KeyL','Semicolon','Quote', 'Enter'];
let forthRowCode = ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB','KeyN','KeyM', 'Comma', 'Period','Slash','ArrowUp', 'ShiftRight'];
let fifthRowCode = ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'MetaRight','ControlRight','ArrowLeft', 'ArrowDown', 'ArrowRight'];


document.addEventListener('keydown', function(event) {
if(firstRowCode.includes(event.code)){
    let pushed = firstRowCode.indexOf(event.code);
    sectionOne.childNodes[pushed].classList.add("active");
}
if(secondRowCode.includes(event.code)){
    let pushed = secondRowCode.indexOf(event.code);
    sectionTwo.childNodes[pushed].classList.add("active");
}
if(thirdRowCode.includes(event.code)){
    let pushed = thirdRowCode.indexOf(event.code);
    sectionThree.childNodes[pushed].classList.add("active");
}
if(forthRowCode.includes(event.code)){
    let pushed = forthRowCode.indexOf(event.code);
    sectionFour.childNodes[pushed].classList.add("active");
}
if(fifthRowCode.includes(event.code)){
    let pushed = fifthRowCode.indexOf(event.code);
    sectionFive.childNodes[pushed].classList.add("active");
}
    
  });

document.addEventListener('keyup', function(event) {
  if(firstRowCode.includes(event.code)){
      let pushed = firstRowCode.indexOf(event.code);
      sectionOne.childNodes[pushed].classList.remove("active");
  }
  if(secondRowCode.includes(event.code)){
      let pushed = secondRowCode.indexOf(event.code);
      sectionTwo.childNodes[pushed].classList.remove("active");
  }
  if(thirdRowCode.includes(event.code)){
      let pushed = thirdRowCode.indexOf(event.code);
      sectionThree.childNodes[pushed].classList.remove("active");
  }
  if(forthRowCode.includes(event.code)){
      let pushed = forthRowCode.indexOf(event.code);
      sectionFour.childNodes[pushed].classList.remove("active");
  }
  if(fifthRowCode.includes(event.code)){
      let pushed = fifthRowCode.indexOf(event.code);
      sectionFive.childNodes[pushed].classList.remove("active");
  }
      
    });




let lowerCase = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab⇄", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", 'Del', 'CapsLock', "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "\'", 'Enter', "⇑Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "🠥", "⇑", 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Win','Ctrl' ,"🠤", "🠧", "🠦"];
let shift = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace", "Tab⇄", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", 'Del', 'CapsLock', "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"", 'Enter', "⇑Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "🠥", "⇑", 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Win','Ctrl' ,"🠤", "🠧", "🠦"];
let capslock = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab⇄", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\", 'Del', 'CapsLock', "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"", 'Enter', "⇑Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "🠥", "⇑", 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Win','Ctrl' ,"🠤", "🠧", "🠦"];
let russianLowerCase = ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab⇄", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", 'Del', 'CapsLock', "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", 'Enter', "⇑Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "🠥", "⇑", 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Win','Ctrl' ,"🠤", "🠧", "🠦"];
let russianShift  = ["Ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "-", "+", "Backspace", "Tab⇄", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "/", 'Del', 'CapsLock', "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", 'Enter', "⇑Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", "🠥", "⇑", 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Win','Ctrl' ,"🠤", "🠧", "🠦"];
let russianCapsLock = ["Ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab⇄", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "\\", 'Del', 'CapsLock', "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", 'Enter', "⇑Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ".", "🠥", "⇑", 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Win','Ctrl' ,"🠤", "🠧", "🠦"];




let buttons = document.querySelectorAll('button');
window.onload = function() {
    if (JSON.parse(window.localStorage.getItem('layout'))[15]=='q'){
        buttons.forEach((button, index) => {
            button.innerHTML = lowerCase[index];
        })
    };
    if (JSON.parse(window.localStorage.getItem('layout'))[15]=='й'){
        buttons.forEach((button, index) => {
            button.innerHTML = russianLowerCase[index];
        })
    };

};
  

buttons.forEach((button, index) => {
   /*mouse click input*/
    button.addEventListener("click", (event) => {
        function getPosition(el) {
            return el.value.slice(0, el.selectionStart).length;
        }  
        let position =  getPosition(document.getElementById('inputWindow')); //get caret position;
        
       
        function setCaretPosition(input, pos) {  //set caret position
            if (input.setSelectionRange) {
                input.focus();
                input.setSelectionRange(pos, pos);
          
            }
        }   

        if (button.innerHTML == 'Backspace') {
            if(inputWindow.selectionEnd == position){
                textarea.value = textarea.value.slice(0, position-1) + textarea.value.slice(position, textarea.value.length);
                setCaretPosition(textarea, position-1);
            }else{
                textarea.value = textarea.value.slice(0, inputWindow.selectionStart) + textarea.value.slice(inputWindow.selectionEnd, textarea.value.length);
                setCaretPosition(textarea, position);
            }
                      
            } else if(button.innerHTML == 'Del'){
                if(inputWindow.selectionEnd == position){
                    textarea.value = textarea.value.slice(0, position) + textarea.value.slice(position+1, textarea.value.length);
                    setCaretPosition(textarea, position);
                }else{
                    textarea.value = textarea.value.slice(0, inputWindow.selectionStart) + textarea.value.slice(inputWindow.selectionEnd, textarea.value.length);
                    setCaretPosition(textarea, position);
                }
            
            } else if(button.innerHTML == 'Enter'){
                if(inputWindow.selectionEnd == position){
                    textarea.value = textarea.value.slice(0, position) + '\n' + textarea.value.slice(position, textarea.value.length); 
                    setCaretPosition(textarea, position+1);
                }else{
                    textarea.value = textarea.value.slice(0, inputWindow.selectionStart) + '\n' + textarea.value.slice(inputWindow.selectionEnd, textarea.value.length);
                    setCaretPosition(textarea, position);
                }
            
            } else if(button.innerHTML == ' '){
                if(inputWindow.selectionEnd == position){
                    textarea.value = textarea.value.slice(0, position) + ' ' + textarea.value.slice(position, textarea.value.length); 
                    setCaretPosition(textarea, position+1);
                }else{
                    textarea.value = textarea.value.slice(0, inputWindow.selectionStart) + ' ' + textarea.value.slice(inputWindow.selectionEnd, textarea.value.length);
                    setCaretPosition(textarea, position+1);
                }
               
            } else if(button.innerHTML == 'Alt' || button.innerHTML == 'Ctrl' || button.innerHTML == 'Win'){
                textarea.value = textarea.value.slice(0, position) + '' + textarea.value.slice(position, textarea.value.length); 
            
            } else if(button.innerHTML =='⇑Shift' || button.innerHTML =='⇑'){
            if(buttons[0].innerHTML == '`'){
                buttons.forEach((item, index) => {
                item.innerHTML = shift[index];
                })
            } else{
                buttons.forEach((item, index) => {
                item.innerHTML = lowerCase[index];
                })
            }
        } else if(button.innerHTML =='CapsLock'){
            if(buttons[15].innerHTML == 'q'){
                buttons.forEach((item, index) => {
                item.innerHTML = capslock[index];
                })
            }else if(buttons[15].innerHTML == 'Q'){
                buttons.forEach((item, index) => {
                item.innerHTML = lowerCase[index];
                })
            }else if(buttons[15].innerHTML == 'й'){
                buttons.forEach((item, index) => {
                item.innerHTML = russianCapsLock[index];
                })
            }else if(buttons[15].innerHTML == 'Й'){
                buttons.forEach((item, index) => {
                item.innerHTML = russianLowerCase[index];
                })
            }
        } else if(button.innerHTML =='Tab⇄'){
            textarea.value += '  ';

        }else if(button.innerHTML =='&lt;'){
            textarea.value += '<';
        }else if(button.innerHTML =='&gt;'){
            textarea.value += '>';
        }else if(button.innerHTML =='&amp;'){
            textarea.value += '&';
        }else{
             textarea.value += button.innerHTML;
        }      



});

});

document.addEventListener("keydown", (event) => {

    if (event.altKey && event.shiftKey) {

        if(buttons[0].innerHTML == '`'){
            buttons.forEach((item, index) => {
                item.innerHTML = russianLowerCase[index];
                })
            window.localStorage.setItem('layout', JSON.stringify(russianLowerCase));
            
            
        }else{
            buttons.forEach((item, index) => {
                item.innerHTML = lowerCase[index];
                })
                window.localStorage.setItem('layout', JSON.stringify(lowerCase));
                JSON.parse(window.localStorage.getItem('layout'));
        }
        
    }
    
    if(event.code =='Tab'){
        textarea.value += '  ';

    }

   
});

document.addEventListener("keydown", (event) => {
    if(event.shiftKey && event.altKey == false && buttons[15].innerHTML == 'q') {
            buttons.forEach((item, index) => {
            item.innerHTML = shift[index];
            }) 
    }

});

document.addEventListener("keyup", (event) => {
    if(buttons[15].innerHTML == 'Q'){
            buttons.forEach((item, index) => {
            item.innerHTML = lowerCase[index];
            })
    }

});

document.addEventListener("keydown", (event) => {
    if(event.shiftKey && event.altKey == false && buttons[15].innerHTML == 'й') {
            buttons.forEach((item, index) => {
            item.innerHTML = russianShift[index];
            }) 
    }

});

document.addEventListener("keyup", (event) => {
    if(buttons[15].innerHTML == 'Й'){
            buttons.forEach((item, index) => {
            item.innerHTML = russianLowerCase[index];
            })
    }

});

document.addEventListener("keydown", (event) => {
    if(event.code == "CapsLock" && buttons[15].innerHTML == 'q') {
            buttons.forEach((item, index) => {
            item.innerHTML = capslock[index];
            }) 
    }

});

document.addEventListener("keyup", (event) => {
    if(buttons[15].innerHTML == 'Q'){
            buttons.forEach((item, index) => {
            item.innerHTML = lowerCase[index];
            })
    }

});

document.addEventListener("keydown", (event) => {
    if(event.code == "CapsLock" && buttons[15].innerHTML == 'й') {
            buttons.forEach((item, index) => {
            item.innerHTML = russianCapsLock[index];
            }) 
    }

});

document.addEventListener("keyup", (event) => {
    if(buttons[15].innerHTML == 'Й'){
            buttons.forEach((item, index) => {
            item.innerHTML = russianLowerCase[index];
            })
    }




});

// inputWindow.value = localStorage.getItem('inputWindow');
// inputWindow.oninput = () => {
//   localStorage.setItem('inputWindow', inputWindow.value)
// };



