var numberOfFilms;
function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while ( numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
      
    }
}
start();
var personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms(){
    for (var i = 0; i < 2; i++){
        var a = prompt("Один из последних просмотренных фильмов", ""),
            b = prompt("На сколько вы оцениваете этот фильм?","");
    
        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMovieDB.movies[a] = b;
    
        }else{
            i--;
        }
      }
    }
        
    rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
  
}
detectPersonalLevel();

function showMyDB(hidden){
    if (!hidden){
    console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres(){
     for(var i = 1; i <= 3; i++) {
         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
     }
}
writeYourGenres();