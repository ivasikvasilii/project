"use strict";

const str = "test";
const arr = [1, 2, 4];

console.log(str.length);

console.log(str.[2]); //  пошук по індексу

console.log(str.toUpperCase()); // перетворює на великі букви

console.log(str.toLowerCase()); // перетворює в нижній регістр

// пошук підстроки
const fruit = "Some fruit" ;
console.log(fruit.indexOf("fruit"));


// вирізання слів
const logg = "Hello world";
console.log(logg.slice(6, 11));


console.log(logg.substring(6, 11));

// другий аргумент - це кількість символів
console.log(logg.substr(6, 11));

//свойства чисел

// заокруглення
const num = 12.2;
console.log(Math.round(num);

//
const test = "12.2px";
console.log(parseInt(test)); // повертає в ціле число

console.log(parseFloat(test)); // повертає в десятичне число
