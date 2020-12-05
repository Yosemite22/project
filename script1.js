var numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
var personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
var a = prompt("Один из последних просмотренных фильмов", ""),
    b = prompt("На сколько вы оцениваете этот фильм?",""),
    c = prompt("Один из последних просмотренных фильмов", ""),
    d = prompt("На сколько вы оцениваете этот фильм?","");
    personalMovieDB.movies[a] = b;
    personalMovieDB.movies[c] = d;
console.log(personalMovieDB);