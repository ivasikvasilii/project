"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');

    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false 
};




function rememberMyFilms() {
    for (let i = 0; i <2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();


 function detectPersonalLevel() {
    if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >=10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
 }

detectPersonalLevel();



 // 3 практика
 // мій варіант
//  function showMyDB() {
//      if (personalMovieDB.privat === false) {
//         console.log(personalMovieDB);  
//      }
//  }
//  showMyDB();

// варіант профі
 function showMyDB (hidden) {
     if (!hidden) {
         console.log(personalMovieDB);
     }
 }
showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 1; i <=3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`); //використовуємо бектики
        personalMovieDB.genres[i - 1] = genre;
    }
}

// інший варіант запису
// function writeYourGenres() {
//     for (let i = 1; i <=3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }
writeYourGenres();


