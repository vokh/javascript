"use strict";

const numberOfFilms = prompt('Сколько фильмов вы посмотрели?');
const lastWatchedFilm = prompt('Последний просмотреный фильм?');
const howRate = prompt('Насколько оцените его?');

const personalMovieDB = {
    count: +numberOfFilms,
    movies: {
        lastWatchedFilm,
        howRate
    },
    actors: {},
    genres: {},
    privat: false
};
console.log(personalMovieDB);