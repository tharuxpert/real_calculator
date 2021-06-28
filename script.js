var input = document.querySelector('#input');
var num00 = document.querySelector('#num00').addEventListener('click', num00Clicked);
var numDot = document.querySelector('#numDot').addEventListener('click', numDotClicked);
var num0 = document.querySelector('#num0').addEventListener('click', num0Clicked);
var num1 = document.querySelector('#num1').addEventListener('click', num1Clicked);
var num2 = document.querySelector('#num2').addEventListener('click', num2Clicked);
var num3 = document.querySelector('#num3').addEventListener('click', num3Clicked);
var num4 = document.querySelector('#num4').addEventListener('click', num4Clicked);
var num5 = document.querySelector('#num5').addEventListener('click', num5Clicked);
var num6 = document.querySelector('#num6').addEventListener('click', num6Clicked);
var num7 = document.querySelector('#num7').addEventListener('click', num7Clicked);
var num8 = document.querySelector('#num8').addEventListener('click', num8Clicked);
var num9 = document.querySelector('#num9').addEventListener('click', num9Clicked);
var numclear = document.querySelector('#numClear').addEventListener('click', clearAll);

var numEqual = document.querySelector('#numEqual').addEventListener('click', equal);
document.querySelector('#numAdd').addEventListener('click', numAdd);
document.querySelector('#numDivs').addEventListener('click', numDivs);
document.querySelector('#numMulti').addEventListener('click', numMulti);
document.querySelector('#numSubs').addEventListener('click', numSubs);

document.getElementById("input").addEventListener("mousedown", unselectable);

function unselectable(event){
  event.preventDefault();
}

function numDotClicked() {
    if (input.value == '') {
        input.value = '';
    }
    else if(input.value.includes('.') == true){
    }
    else {
        var x = '.';
        input.value += (`${x}`);
        numClear.textContent = 'C';
    }
}
function num00Clicked() {
    
    if (input.value == '' || input.value == '0') {
        
    }
    else {
        var x = parseInt(0);
        input.value += (`${x}0`);
        numClear.textContent = 'C';
    }
}
function num0Clicked() {
    
    if (input.value == '0') {
        
    }
    else {
        var x = parseInt(0);
        input.value += x;
        numClear.textContent = 'C';
    }
}
function num1Clicked() {
    var x = parseInt(1);
    input.value += x;
    numClear.textContent = 'C';
}
function num2Clicked() {
    var x = parseInt(2);
    input.value += x;
    numClear.textContent = 'C';
}
function num3Clicked() {
    var x = parseInt(3);
    input.value += x;
    numClear.textContent = 'C';
}
function num4Clicked() {
    var x = parseInt(4);
    input.value += x;
    numClear.textContent = 'C';
}
function num5Clicked() {
    var x = parseInt(5);
    input.value += x;
    numClear.textContent = 'C';
}
function num6Clicked() {
    var x = parseInt(6);
    input.value += x;
    numClear.textContent = 'C';
}
function num7Clicked() {
    var x = parseInt(7);
    input.value += x;
    numClear.textContent = 'C';
}
function num8Clicked() {
    var x = parseInt(8);
    input.value += x;
    numClear.textContent = 'C';
}
function num9Clicked() {
    var x = parseInt(9);
    input.value += x;
    numClear.textContent = 'C';
}

function clearAll() {
    input.value = '';
    numClear.textContent = 'CE';
}

var x = 0;
var d = 0;
var operator;
// Mathematical operations
function numAdd() {
    operator = '+';
    x = input.value;
    numClear.textContent = 'CE';

    if (input.value == '' || input.value == '0.') {
        alert('Invalid Value!')
    }

    input.value = '';
}

function numSubs() {
    operator = '-';
    x = input.value;
    numClear.textContent = 'CE';

    if (input.value == '' || input.value == '0.') {
        alert('Invalid Value!')
    }

    input.value = '';
}

function numDivs() {
    operator = '/';
    x = input.value;
    numClear.textContent = 'CE';

    if (input.value == '' || input.value == '0.') {
        alert('Invalid Value!')
    }

    input.value = '';
}

function numMulti() {
    operator = '*';
    x = input.value;
    numClear.textContent = 'CE';

    if (input.value == '' || input.value == '0.') {
        alert('Invalid Value!')
    }

    input.value = '';
}

function equal() {
    switch (operator) {
        case '+':
            y = input.value;
            var e = parseInt(x) + parseInt(y);

            numClear.textContent = 'CE';

            input.value = e;
            break;
        case '-':
            y = input.value;
            var e = parseInt(x) - parseInt(y);

            numClear.textContent = 'CE';

            input.value = e;
            break;
        case '/':
            y = input.value;
            var e = parseInt(x) / parseInt(y);

            numClear.textContent = 'CE';

            input.value = e;
            break;
        case '*':
            y = input.value;
            var e = parseInt(x) * parseInt(y);

            numClear.textContent = 'CE';

            input.value = e;
            break;
    }
        
}