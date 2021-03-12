"use strict";

const numberOfFilms = prompt('Сколько фильмов вы посмотрели?');

const personalMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};
for(let i = 0; i < 2; i++){
    const lastFilm = prompt('Последний просмотреный фильм?'),
        howRate = prompt('Насколько оцените его?');
        if(lastFilm != null && howRate != null && lastFilm != '' && howRate != '' && lastFilm.length < 50){
            personalMovieDB.movies[lastFilm] = howRate;
        }else{
            i--;
        }
}
if (numberOfFilms < 10){
    console.log("Просмотрено довольно мало фильмов");
}else if (10 < numberOfFilms < 30){
    console.log("Вы классический зритель");
}else if (30 < numberOfFilms){
    console.log("Вы киноман");
}