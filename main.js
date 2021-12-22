
//coding done by soumik
//tic tac toe javascript
// Declaring the elements
const b1 = document.querySelector(".b1");
const b2 = document.querySelector(".b2");
const b3 = document.querySelector(".b3");
const b4 = document.querySelector(".b4");
const b5 = document.querySelector(".b5");
const b6 = document.querySelector(".b6");
const b7 = document.querySelector(".b7");
const b8 = document.querySelector(".b8");
const b9 = document.querySelector(".b9");
const wOrL = document.querySelector(".winOrLoss");
const sub = document.querySelector(".sub");

let s = 1 ;

let b1Sub = b1.addEventListener("click", b1Func);
let b2Sub = b2.addEventListener("click", b2Func);
let b3Sub = b3.addEventListener("click", b3Func);
let b4Sub = b4.addEventListener("click", b4Func);
let b5Sub = b5.addEventListener("click", b5Func);
let b6Sub = b6.addEventListener("click", b6Func);
let b7Sub = b7.addEventListener("click", b7Func);
let b8Sub = b8.addEventListener("click", b8Func);
let b9Sub = b9.addEventListener("click", b9Func);
let sub1 = sub.addEventListener("click", Clear);

// Every time a button is clicked the value of 's' is increased by 1. For example, if the user clicks b1 in the begining, value of 's'
// will be 1 resulting 'j' to be 5. In line 31, the var m converts 'j' in this case 5 to string which is '5'. In the next line
// q = last letter of the string 'j' which is 5(taking the last letter is important cause later on, we will be incrementing s making
// 'j' a double digit integer). In the 35th line convert the the last letter to a number and check if the number is 5, then print
// 'X' otherwise print 'O', then increment 's' and go on with the same process but with new value of s resulting in the swap after each 
// player's turn.

function b1Func() {
    let j = s/2*10 ;
    let m = String(j);
    let q = m.charAt(m.length-1);
    let n = Number(q);

    if (n === 5) {
        b1.value = "X";
        b1.disabled = true;
    } else {
        b1.value = "O";
        b1.disabled = true;
    }
    s++;
    // Here for everytime a button is pressed we are checking if the winning combination is met. If it is then disable all the buttons
    // and print the winning msg and if no more button is available then print draw.
    if (b1.value === "X" && b2.value === "X" && b3.value === "X" || b1.value === "X" && b4.value === "X" && b7.value === "X" || b1.value === "X" && b5.value === "X" && b9.value === "X") {
        wOrL.textContent = "X wins";
        return over();
    } else if(b1.value === "O" && b2.value === "O" && b3.value === "O" || b1.value === "O" && b4.value === "O" && b7.value === "O" || b1.value === "O" && b5.value === "O" && b9.value === "O"){
        wOrL.textContent = "O wins";
        return over();
    } else if ((b1.value === "X" || b1.value === "O") && (b2.value === "X" || b2.value === "O") && (b3.value === "X" || b3.value === "O") && (b4.value === "X" || b4.value === "O") && (b5.value === "X" || b5.value === "O") && (b6.value === "X" || b6.value === "O") && (b7.value === "X" || b7.value === "O") && (b8.value === "X" || b8.value === "O") && (b9.value === "X" || b9.value === "O")) {
        wOrL.textContent = "Draw";
    }
    }

function b2Func() {
    let j = s/2*10 ;
    let m = String(j);
    let q = m.charAt(m.length-1);
    let n = Number(q);

    if (n === 5) {
        b2.value = "X";
        b2.disabled = true;
    } else {
        b2.value = "O";
        b2.disabled = true;
    }
    s++;
    if (b1.value === "X" && b2.value === "X" && b3.value === "X" || b2.value === "X" && b5.value === "X" && b8.value === "X") {
        wOrL.textContent = "X wins";
        return over();
    } else if(b1.value === "O" && b2.value === "O" && b3.value === "O" || b2.value === "O" && b5.value === "O" && b8.value === "O"){
        wOrL.textContent = "O wins";
        return over();
    } else if ((b1.value === "X" || b1.value === "O") && (b2.value === "X" || b2.value === "O") && (b3.value === "X" || b3.value === "O") && (b4.value === "X" || b4.value === "O") && (b5.value === "X" || b5.value === "O") && (b6.value === "X" || b6.value === "O") && (b7.value === "X" || b7.value === "O") && (b8.value === "X" || b8.value === "O") && (b9.value === "X" || b9.value === "O")) {
        wOrL.textContent = "Draw";
    }
    }

function b3Func() {
    let j = s/2*10 ;
    let m = String(j);
    let q = m.charAt(m.length-1);
    let n = Number(q);

    if (n === 5) {
        b3.value = "X";
        b3.disabled = true;
    } else {
        b3.value = "O";
        b3.disabled = true;
    }
    s++;
    if (b1.value === "X" && b2.value === "X" && b3.value === "X" || b3.value === "X" && b6.value === "X" && b9.value === "X" || b3.value === "X" && b5.value === "X" && b7.value === "X") {
        wOrL.textContent = "X wins";
        return over();
    } else if(b1.value === "O" && b2.value === "O" && b3.value === "O" || b3.value === "O" && b6.value === "O" && b9.value === "O" || b3.value === "O" && b5.value === "O" && b7.value === "O"){
        wOrL.textContent = "O wins";
        return over();
    } else if ((b1.value === "X" || b1.value === "O") && (b2.value === "X" || b2.value === "O") && (b3.value === "X" || b3.value === "O") && (b4.value === "X" || b4.value === "O") && (b5.value === "X" || b5.value === "O") && (b6.value === "X" || b6.value === "O") && (b7.value === "X" || b7.value === "O") && (b8.value === "X" || b8.value === "O") && (b9.value === "X" || b9.value === "O")) {
        wOrL.textContent = "Draw";
    }
    }

function b4Func() {
    let j = s/2*10 ;
    let m = String(j);
    let q = m.charAt(m.length-1);
    let n = Number(q);

    if (n === 5) {
        b4.value = "X";
        b4.disabled = true;
    } else {
        b4.value = "O";
        b4.disabled = true;
    }
    s++;
    if (b1.value === "X" && b4.value === "X" && b7.value === "X" || b4.value === "X" && b5.value === "X" && b6.value === "X") {
        wOrL.textContent = "X wins";
        return over();
    } else if(b1.value === "O" && b4.value === "O" && b7.value === "O" || b4.value === "O" && b5.value === "O" && b6.value === "O"){
        wOrL.textContent = "O wins";
        return over();
    } else if ((b1.value === "X" || b1.value === "O") && (b2.value === "X" || b2.value === "O") && (b3.value === "X" || b3.value === "O") && (b4.value === "X" || b4.value === "O") && (b5.value === "X" || b5.value === "O") && (b6.value === "X" || b6.value === "O") && (b7.value === "X" || b7.value === "O") && (b8.value === "X" || b8.value === "O") && (b9.value === "X" || b9.value === "O")) {
        wOrL.textContent = "Draw";
    }
    }

function b5Func() {
    let j = s/2*10 ;
    let m = String(j);
    let q = m.charAt(m.length-1);
    let n = Number(q);

    if (n === 5) {
        b5.value = "X";
        b5.disabled = true;
    } else {
        b5.value = "O";
        b5.disabled = true;
    }
    s++;
    if (b1.value === "X" && b5.value === "X" && b9.value === "X" || b3.value === "X" && b5.value === "X" && b7.value === "X" || b2.value === "X" && b5.value === "X" && b8.value === "X" || b4.value === "X" && b5.value === "X" && b6.value === "X") {
        wOrL.textContent = "X wins";
        return over();
    } else if(b1.value === "O" && b5.value === "O" && b9.value === "O" || b3.value === "O" && b5.value === "O" && b7.value === "O" || b2.value === "O" && b5.value === "O" && b8.value === "O" || b4.value === "O" && b5.value === "O" && b6.value === "O"){
        wOrL.textContent = "O wins";
        return over();
    } else if ((b1.value === "X" || b1.value === "O") && (b2.value === "X" || b2.value === "O") && (b3.value === "X" || b3.value === "O") && (b4.value === "X" || b4.value === "O") && (b5.value === "X" || b5.value === "O") && (b6.value === "X" || b6.value === "O") && (b7.value === "X" || b7.value === "O") && (b8.value === "X" || b8.value === "O") && (b9.value === "X" || b9.value === "O")) {
        wOrL.textContent = "Draw";
    }
    }

function b6Func() {
    let j = s/2*10 ;
    let m = String(j);
    let q = m.charAt(m.length-1);
    let n = Number(q);

    if (n === 5) {
        b6.value = "X";
        b6.disabled = true;
    } else {
        b6.value = "O";
        b6.disabled = true;
    }
    s++;
    if (b3.value === "X" && b6.value === "X" && b9.value === "X" || b4.value === "X" && b5.value === "X" && b6.value === "X") {
        wOrL.textContent = "X wins";
        return over();
    } else if(b3.value === "O" && b6.value === "O" && b9.value === "O" || b4.value === "O" && b5.value === "O" && b6.value === "O"){
        wOrL.textContent = "O wins";
        return over();
    } else if ((b1.value === "X" || b1.value === "O") && (b2.value === "X" || b2.value === "O") && (b3.value === "X" || b3.value === "O") && (b4.value === "X" || b4.value === "O") && (b5.value === "X" || b5.value === "O") && (b6.value === "X" || b6.value === "O") && (b7.value === "X" || b7.value === "O") && (b8.value === "X" || b8.value === "O") && (b9.value === "X" || b9.value === "O")) {
        wOrL.textContent = "Draw";
    }
    }

function b7Func() {
    let j = s/2*10 ;
    let m = String(j);
    let q = m.charAt(m.length-1);
    let n = Number(q);

    if (n === 5) {
        b7.value = "X";
        b7.disabled = true;
    } else {
        b7.value = "O";
        b7.disabled = true;
    }
    s++;
    if (b1.value === "X" && b4.value === "X" && b7.value === "X" || b3.value === "X" && b5.value === "X" && b7.value === "X" || b9.value === "X" && b8.value === "X" && b7.value === "X"){
        wOrL.textContent = "X wins";
        return over();
    } else if(b1.value === "O" && b4.value === "O" && b7.value === "O" || b3.value === "O" && b5.value === "O" && b7.value === "O" || b9.value === "O" && b8.value === "O" && b7.value === "O"){
        wOrL.textContent = "O wins";
        return over();
    } else if ((b1.value === "X" || b1.value === "O") && (b2.value === "X" || b2.value === "O") && (b3.value === "X" || b3.value === "O") && (b4.value === "X" || b4.value === "O") && (b5.value === "X" || b5.value === "O") && (b6.value === "X" || b6.value === "O") && (b7.value === "X" || b7.value === "O") && (b8.value === "X" || b8.value === "O") && (b9.value === "X" || b9.value === "O")) {
        wOrL.textContent = "Draw";
    }
    }

function b8Func() {
    let j = s/2*10 ;
    let m = String(j);
    let q = m.charAt(m.length-1);
    let n = Number(q);

    if (n === 5) {
        b8.value = "X";
        b8.disabled = true;
    } else {
        b8.value = "O";
        b8.disabled = true;
    }
    s++;
    if (b2.value === "X" && b5.value === "X" && b8.value === "X" || b7.value === "X" && b9.value === "X" && b8.value === "X") {
        wOrL.textContent = "X wins";
        return over();
    } else if(b2.value === "O" && b5.value === "O" && b8.value === "O" || b7.value === "O" && b9.value === "O" && b8.value === "O"){
        wOrL.textContent = "O wins";
        return over();
    } else if ((b1.value === "X" || b1.value === "O") && (b2.value === "X" || b2.value === "O") && (b3.value === "X" || b3.value === "O") && (b4.value === "X" || b4.value === "O") && (b5.value === "X" || b5.value === "O") && (b6.value === "X" || b6.value === "O") && (b7.value === "X" || b7.value === "O") && (b8.value === "X" || b8.value === "O") && (b9.value === "X" || b9.value === "O")) {
        wOrL.textContent = "Draw";
    }
    }

function b9Func() {
    let j = s/2*10 ;
    let m = String(j);
    let q = m.charAt(m.length-1);
    let n = Number(q);

    if (n === 5) {
        b9.value = "X";
        b9.disabled = true;
    } else {
        b9.value = "O";
        b9.disabled = true;
    }
    s++;
    if (b1.value === "X" && b5.value === "X" && b9.value === "X" || b3.value === "X" && b6.value === "X" && b9.value === "X" || b7.value === "X" && b8.value === "X" && b9.value === "X") {
        wOrL.textContent = "X wins";
        return over();
    } else if(b1.value === "O" && b5.value === "O" && b9.value === "O" || b3.value === "O" && b6.value === "O" && b9.value === "O" || b7.value === "O" && b8.value === "O" && b9.value === "O"){
        wOrL.textContent = "O wins";
        return over();
    } else if ((b1.value === "X" || b1.value === "O") && (b2.value === "X" || b2.value === "O") && (b3.value === "X" || b3.value === "O") && (b4.value === "X" || b4.value === "O") && (b5.value === "X" || b5.value === "O") && (b6.value === "X" || b6.value === "O") && (b7.value === "X" || b7.value === "O") && (b8.value === "X" || b8.value === "O") && (b9.value === "X" || b9.value === "O")) {
        wOrL.textContent = "Draw";
    }
    }

function Clear() {
    b1.value = "";
    b2.value = "";
    b3.value = "";
    b4.value = "";
    b5.value = "";
    b6.value = "";
    b7.value = "";
    b8.value = "";
    b9.value = "";
    b1.disabled = false;
    b2.disabled = false;
    b3.disabled = false;
    b4.disabled = false;
    b5.disabled = false;
    b6.disabled = false;
    b7.disabled = false;
    b8.disabled = false;
    b9.disabled = false;
    wOrL.textContent = "";
    s = 1;
}
function over() {
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;
}