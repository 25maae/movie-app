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
