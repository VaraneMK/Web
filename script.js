"use strict"
const numberofFilms = +prompt("Сколько фильмов вы посмотрели?", "");
const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt("Один из последних фильмов?", ""),
    b = prompt("На сколько оцените его?", ""),
    c = prompt("Один из последних фильмов?", ""),
    d = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[с] = d;

console.log(personalMovieDB);