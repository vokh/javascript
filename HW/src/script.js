"use strict";

let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?');
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?')   
    }
}



const personalMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function remeberMyFilms(){
    for(let i = 0; i < 2; i++){
        const lastFilm = prompt('Последний просмотреный фильм?'),
            howRate = prompt('Насколько оцените его?');
            if(lastFilm != null && howRate != null && lastFilm != '' && howRate != '' && lastFilm.length < 50){
                personalMovieDB.movies[lastFilm] = howRate;
            }else{
                i--;
            }
    }
}

/* remeberMyFilms(); */

function detectPersonalLvl(){
    if (numberOfFilms < 10){
        console.log("Просмотрено довольно мало фильмов");
    }else if (10 <= numberOfFilms < 30){
        console.log("Вы классический зритель");
    }else if (30 <= numberOfFilms){
        console.log("Вы киноман");
    }
}
/* detectPersonalLvl(); */

function showMyDB(isPrivat){
    if (!isPrivat){
        console.log(personalMovieDB);
    }
}
/* showMyDB(personalMovieDB.privat); */

function writeYourGenres(){
    for( let i = 1; i < 4; i++){
       personalMovieDB.genres[i-1] = prompt (`Ваш любимый жанр под номером ${i}?`);
    }
    showMyDB(personalMovieDB.privat);
}
writeYourGenres();