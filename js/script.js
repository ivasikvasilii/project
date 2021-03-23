"use strict";

// const obj = new Object();

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();

const {border, bg} = options.colors; // деструктуризація (замість options.["colors"] ["border"])
console.log(border);



// console.log(Object.keys(options).length); //рахує кількість свойств в об'єкті


// console.log(options.["colors"] ["border"]);

// delete options.name;

// console.log(options);

//  Перебор свойств + рахує кількість 
// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`); 
//             counter++;
//         }
//     } else {
//      console.log(`Свойство ${key} имеет значение ${options[key]}`); 
//      counter++;  
//     }   
// }
// console.log(counter);
