"use strict";

const arr = [1, 2, 3, 6, 8];

arr[99] = 0; // додавання елементу в масив під 99 індекс

console.log(arr.length);  //length - останній індекс масиву +1




arr.pop(); // видаляє останній елемент з масиву
arr.push(10); //додає елемент в кінець масиву

// перебор масиву
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


// другий варіант
for (let value of arr) {
    console.log(value); 
}

//інший варіант

const arr = [1, 2, 3, 6, 8];
arr.forEach(function(item, i, arr) {       //item - значення елементу масиву, i - індекс масиву, arr - ссилка на масив
    console.log(`${i}: ${item} внутри масива ${arr}`);
});

// перетворення строки в масив
const str = prompt("", "");
const products = str.split(", "); 
products.sort(); //сортує елемент як строки по алфавіту
console.log(products.join('; ')); //перетворює масив в строку


// сортування чисел
function compareNum (a, b) {
    return a - b;
}
