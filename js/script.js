"use strict";

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

const copy = obj; //Передаємо не струтуру об'єкта а ссилку (переприсвоюємо об'єкт)

console.log(copy);
console.log(obj);

// копіювання об'єкта через цикл
function copyy (mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

//приклад
const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copyy(numbers); // створили копію

newNumbers.a = 10;

console.log(newNumbers);
console.log(numbers);

// з'єднуємо два об'єкта

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};
const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add));

//з'єднання нового і порожнього об'єкта
const clone = Object.assign({}, add);
clone.d = 20;
console.log(add);
console.log(clone);


//копія масиву
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();  //метод slice - копіює масив

newArray[1] = 'dgfhgjhg';
console.log(newArray);
console.log(oldArray); 



//example
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];
      
console.log(internet); 



//example 2

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const numm = [2, 5, 7];

log(...numm)




// 4 спосіб копіювання spread operator

const array = ["a", "b"];

const newAarray = [...array];

const q = {
    one: 1,
    two: 2
}

const newObj = {...q};