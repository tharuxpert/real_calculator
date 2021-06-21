var input = document.querySelector('#input');
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
var numclearTxt = document.querySelector('.btnC').textContent;


function num0Clicked() {
    var x = parseInt(0)
    input.value += x;
}
function num1Clicked() {
    var x = parseInt(1)
    input.value += x;
}
function num2Clicked() {
    var x = parseInt(2)
    input.value += x;
}
function num3Clicked() {
    var x = parseInt(3)
    input.value += x;
}
function num4Clicked() {
    var x = parseInt(4)
    input.value += x;
}
function num5Clicked() {
    var x = parseInt(5)
    input.value += x;
}
function num6Clicked() {
    var x = parseInt(6)
    input.value += x;
}
function num7Clicked() {
    var x = parseInt(7)
    input.value += x;
}
function num8Clicked() {
    var x = parseInt(8)
    input.value += x;
}
function num9Clicked() {
    var x = parseInt(9)
    input.value += x;
}

// Clear btn 'C' Text content inserting
if (input.value != '') {
    numclearTxt.textContent = 'C';
}

function clearAll() {
    input.value = '';
}