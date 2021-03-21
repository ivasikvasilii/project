"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
};

showFirstMessage("Hello World!");
console.log(num);



function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));


function ret() {
    let num = 50;
    return num;
}

 const anotherNum = ret();
 console.log(anotherNum);



// Function Expression
 const logger = function() {
    console.log("Hello!")
 };

 logger();




//  Стрелочная функция

const calcul = (a, b) => {
    console.log('1');
    return a + b;
};
