var clark = 0;
var x;
var y;
var z;
var fanny;

/* while loop variables or data type. for guesing the developer nick name */

var names = "clarksoy";
var userInput;
var attempt = 0;

var clue  = "clark";
var clueInput;

/* Code of the programm of deacrease and increase the number. */ 

document.getElementById('dec').onclick = function () {
    clark -= 1;

    document.getElementById('display').innerHTML = clark;
}
document.getElementById('inc').onclick = function () {
    clark += 1;

    document.getElementById('display').innerHTML = clark;
}
document.getElementById('res').onclick = function () {
    clark = 0;

    document.getElementById('display').innerHTML = clark;
}

/* Generate the random 3 numbers */

document.getElementById('roll').onclick = function () {
    x = Math.floor(Math.random() * 9) + 1;
    y = Math.floor(Math.random() * 9) + 1;
    z = Math.floor(Math.random() * 9) + 1;


    document.getElementById('first').innerHTML = x;
    document.getElementById('second').innerHTML = y;
    document.getElementById('third').innerHTML = z;
}

document.getElementById('rec').onclick = function () {

    document.getElementById('first').innerHTML = "0";
    document.getElementById('second').innerHTML = "0";
    document.getElementById('third').innerHTML = "0";
}

/* calculator area */

document.getElementById('acc').onclick = function () {
    document.getElementById('displays').value = '';
}

document.getElementById('.').onclick = function () {
    document.getElementById('displays').value += '.';
}

document.getElementById('/').onclick = function () {
    document.getElementById('displays').value += '/';
}

document.getElementById('7').onclick = function () {
    document.getElementById('displays').value += '7';
}

document.getElementById('8').onclick = function () {
    document.getElementById('displays').value += '8';
}

document.getElementById('9').onclick = function () {
    document.getElementById('displays').value += '9';
}

document.getElementById('*').onclick = function () {
    document.getElementById('displays').value += '*';
}

document.getElementById('4').onclick = function () {
    document.getElementById('displays').value += '4';
}

document.getElementById('5').onclick = function () {
    document.getElementById('displays').value += '5';
}

document.getElementById('6').onclick = function () {
    document.getElementById('displays').value += '6';
}

document.getElementById('-').onclick = function () {
    document.getElementById('displays').value += '-';
}

document.getElementById('1').onclick = function () {
    document.getElementById('displays').value += '1';
}

document.getElementById('2').onclick = function () {
    document.getElementById('displays').value += '2';
}

document.getElementById('3').onclick = function () {
    document.getElementById('displays').value += '3';
}

document.getElementById('+').onclick = function () {
    document.getElementById('displays').value += '+';
}

document.getElementById('0').onclick = function () {
    document.getElementById('displays').value += '0';
}

document.getElementById('00').onclick = function () {
    document.getElementById('displays').value += '00';
}

document.getElementById('=').onclick = function () {
    document.getElementById('displays').value = eval(displays.value);
}

window.alert("Before you use the programm you can enter the developer nickname! if you attempt to 6 The programm will display hello world ! and you can not use my program thank you !");
window.alert("Type *clark* first to hint a developer nickname !");

while (userInput != names && attempt < 6) {
    
    while (clueInput != clue) {
        clueInput = window.prompt("Enter clark first:");
    
        if (clueInput == clue) {
            window.alert("My Nickname is c*a*k**y");
        }
        else {
            window.alert("Please input clark first !!");
        }
    }

    attempt ++;
    userInput = window.prompt("Attempt "+ attempt + " Enter The Developer Nickname: ");

    if (userInput == names) {
        window.alert("Congratulation You Can Now Use My Program !");

        var white = document.getElementsByTagName('body')[0];

        white.classList.toggle('white');
    }
    else if (userInput == "clark") {
        window.alert("Opps more words to go correct the answer !");
    }
    else if (userInput == "CLARKSOY") {
        window.alert("Opps You Use A Capital Letter Think Before you type hehe !");
    }
    else {
        window.alert("Wrong Answer Try Again But You are in Attempt " + attempt);
    }

    if (attempt < 6) {
        var black = document.getElementsByTagName('body')[0];

        black.classList.toggle('dark');
    }
}


document.getElementById('age').onclick = function () {
    fanny = document.getElementById('input').value;

    if (fanny > 900) {
        document.getElementById('answers').innerHTML = "You Are A God !";
    }
    else if (fanny > 60) {
        document.getElementById('answers').innerHTML = "You Are A Senior !";
    }
    else if (fanny > 18) {
        document.getElementById('answers').innerHTML = "You Are An Adult !";
    }
    else if (fanny > 1) {
        document.getElementById('answers').innerHTML = "You Are A Child !";
    }
    else if (fanny < 1) {
        document.getElementById('answers').innerHTML = "You Have't been born yet !";
    }
    else {
        document.getElementById('answers').innerHTML = "Please Input a number not a word or letter. Did Age Required Type a Word? Think before you type or input !!";
    }
}

document.getElementById('reset').onclick = function () {
    fanny = document.getElementById('input').value = '';

    document.getElementById('answers').innerHTML = "";
}