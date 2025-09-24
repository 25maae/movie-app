"use strict";
window.addEventListener("load", initApp);

function initApp() {
  console.log("initApp: Movie App is running 🎉");
}

const movieTitle = "The Matrix"; // "const" betyder konstant - værdien kan ikke ændres. "The Matrix" er en string (tekst) //
console.log("Movie:", movieTitle); // "movieTitle" er variabelnavnet (professional naming på engelsk). "console.log()" viser værdien i browseren. //

const movieYear = 1999; // Numre behøver ikke anførselstegnene //
const movieGenre = "Action"; // Endnu en title //
console.log("Year:", movieYear);
console.log("Genre:", movieGenre);

let userRating = 4.5;
console.log("Start rating:", userRating);
userRating = 5.0;
console.log("New rating:", userRating);

const multiLineMessage = `🎬 MOVIE INFO:
Title: ${movieTitle}
Year: ${movieYear}
Rating: ${userRating}/10
Genre: ${movieGenre}`;
console.log(multiLineMessage);

// Only strings (text)
const movieTitles = ["The Matrix", "Inception"];

// Only numbers
const movieYears = [1999, 2010, 2014];

// Movie ratings (numbers)
const movieRatings = [8.7, 8.8, 8.6];

// Blandet indhold (fungerer også!)
const randomArray = ["The Matrix", 1999, 8.7];

console.log("Film navne:", movieTitles);
console.log("Film år:", movieYears);
console.log("Film ratings:", movieRatings);
console.log("Blandet:", randomArray);

// Hent enkelt film (VIGTIGT: arrays starter fra 0!)
console.log("Første film (index 0):", movieTitles[0]);
console.log("Anden film (index 1):", movieTitles[1]);
console.log("Tredje film (index 2):", movieTitles[2]);

// Find længden af listen
console.log("Antal film i listen:", movieTitles.length);
console.log("Sidste film (smart måde):", movieTitles[movieTitles.length - 1]);
