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

// Tilføj film til slutningen
movieTitles.push("The Dark Knight");
console.log("Efter tilføjelse:", movieTitles);
console.log("Nu har vi", movieTitles.length, "film!");

// Tilføj flere på én gang
movieTitles.push("Pulp Fiction", "Goodfellas");
console.log("Efter flere tilføjelser:", movieTitles);

// Fjern den sidste film
const fjernetFilm = movieTitles.pop();
console.log("Fjernet film:", movieTitles);
console.log("Listen nu:", movieTitles);

// Fjern den første film
const førsteFjernet = movieTitles.shift();
console.log("Første fjernet:", førsteFjernet);
console.log("Listen nu:", movieTitles);

// An object collects ALL data about one movie! 🎉 (like in your movies.json)
const movie = {
  title: "The Matrix",
  year: 1999,
  rating: 8.7,
};

console.log("Complete movie object:", movie);

// Get specific properties with dot notation
console.log("Movie title:", movie.title);
console.log("Release year:", movie.year);
console.log("Rating:", movie.rating);

// Real movie object structure (exactly like your movies.json!)
const realMovie = {
  id: 2,
  title: "The Matrix",
  year: 1999,
  genre: ["Action", "Sci-Fi"],
  director: "Lana Wachowski, Lilly Wachowski",
  rating: 8.7,
  actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
};

console.log("Movie ID:", realMovie.id); // realMovie.genre[0] kombinerer objekt- og array-adgang //
console.log("Title:", realMovie.title);
console.log("First genre:", realMovie.genre[0]);
console.log("Director:", realMovie.director);
console.log("First actor:", realMovie.actors[0]);

// Vi kan tilføje nyt data til eksisterende objekter
realMovie.watched = false;
realMovie.review = "Fantastisk film!";

console.log("Er filmen set?", realMovie.watched);
console.log("Anmeldelse:", realMovie.review);

// Vi kan også ændre data der allerede findes
console.log("Gammel rating:", realMovie.rating);

realMovie.rating = 9.0; // Opgraderet!
realMovie.watched = true; // Nu har vi set den!

console.log("Ny rating:", realMovie.rating);
console.log("Nu er den set:", realMovie.watched);

// Lav en flot beskrivelse med objektdata
// ${realMovie.title} henter title fra objektet //
// ${realMovie.genre[0]} henter første genre fra array //
// ${realMovie.actors[0]} henter første skuespiller fra array //

const movieDescription = `
🎬 ${realMovie.title} (${realMovie.year})
⭐ Rating: ${realMovie.rating}/10  
🎭 First genre: ${realMovie.genre[0]}
� Director: ${realMovie.director}
👥 First actor: ${realMovie.actors[0]}
📝 ${realMovie.review}
`;

console.log("Movie info:");
console.log(movieDescription);

// Array of movie objects - exactly like allMovies in your project! 🎉
const allMovies = [
  {
    id: 1,
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    genre: ["Action", "Sci-Fi"],
  },
  {
    id: 2,
    title: "Inception",
    year: 2010,
    rating: 8.8,
    genre: ["Action", "Thriller"],
  },
];

console.log("Complete movie database:", allMovies);
console.log("Number of movies:", allMovies.length);

// Hent den første film (index 0)
const firstMovie = allMovies[0]; // allMovies[0] henter første movie object //
console.log("Første film objekt:", førsteFilm);
console.log("First movie title:", firstMovie.title); // allMovies[0].title henter titlen fra første movie //

// Eller gør det direkte i ét trin
console.log("Second movie year:", allMovies[1].year); // allMovies[1].year henter året fra anden movie direkte //
console.log("Second movie rating:", allMovies[1].rating);

// Udvid databasen med mere komplekse objekter
const allMovies = [
  {
    id: 1,
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    genre: ["Action", "Sci-Fi"],
    director: "Lana Wachowski, Lilly Wachowski"
  },
  {
    id: 2,
    title: "Inception",
    year: 2010,
    rating: 8.8,
    genre: ["Action", "Thriller", "Sci-Fi"],
    director: "Christopher Nolan"
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    genre: ["Action", "Crime", "Drama"],
    director: "Christopher Nolan"
  }
];

console.log("All movies:", allMovies);

// Hent komplekse data
console.log("Matrix first genre:", allMovies[0].genre[0]);
console.log("Inception director:", allMovies[1].director);
console.log("Dark Knight number of genres:", allMovies[2].genre.length);

// Hent alle genrer for første film
const matrixGenres = allMovies[0].genre;
console.log("Matrix alle genrer:", matrixGenres.join(", "));

// Loop through all movies
for (const movie of allMovies) {
  console.log(`🎬 ${movie.title} (${movie.year})`);
  console.log(`⭐ Rating: ${movie.rating}`);
  console.log(`🎭 Genre: ${movie.genre[0]}`);
  console.log("---");
}

// En funktion - genbrugelig kode! 🎉
function sayHello() {
  console.log("Hej! Velkommen til filmappen! 🎬");
}

// Funktion med parameter - input til funktionen!
function sayHelloTo(name) {
  console.log(`Hej ${name}! Velkommen til filmappen! 🎬`);
}

// Nu kan vi give forskellige navne
sayHelloTo("Emma");
sayHelloTo("Lucas");
sayHelloTo("Sofie");

// Funktion med flere parametre
function sayHelloToUser(name, age) {
  console.log(`Hej ${name}! Du er ${age} år og velkommen til filmappen! 🎬`);
}

// Giv flere inputs til funktionen
sayHelloToUser("Emma", 25);
sayHelloToUser("Lucas", 30);
sayHelloToUser("Sofie", 22);

// Funktion der beregner og returnerer en værdi
function calculateMovieAge(releaseYear) {
  const currentYear = 2025;
  const age = currentYear - releaseYear;
  return age; // Send resultatet tilbage!
}

// Gem resultatet i en variabel
const matrixAge = calculateMovieAge(1999);
console.log("The Matrix er", matrixAge, "år gammel");

// Eller brug det direkte
console.log("Inception er", calculateMovieAge(2010), "år gammel");

// Function that takes a movie object as parameter (like your displayMovie function)
function displayMovieInfo(movie) {
  const movieInfo = `🎬 ${movie.title} (${movie.year}) - Rating: ⭐ ${movie.rating}`;
  return movieInfo;
}

// Now we can reuse this for any movie!
const testMovie = {
  id: 1,
  title: "The Matrix",
  year: 1999,
  rating: 8.7,
  genre: ["Action", "Sci-Fi"]
};

console.log(displayMovieInfo(testMovie));

// Funktion der henter film titel
function getMovieTitle(movieObject) {
  return movieObject.title;
}

// Funktion der henter film år
function getMovieYear(movieObject) {
  return movieObject.year;
}

// Funktion der beregner film alder
function getMovieAge(movieObject) {
  const currentYear = 2025;
  return currentYear - movieObject.year;
}

// Test funktionerne
console.log("Film titel:", getMovieTitle(testMovie));
console.log("Film år:", getMovieYear(testMovie));
console.log("Film alder:", getMovieAge(testMovie), "år");

// Create a test database (match your project structure)
const allMovies = [
  { title: "The Matrix", year: 1999, rating: 8.7, genre: ["Action", "Sci-Fi"] },
  { title: "Inception", year: 2010, rating: 8.8, genre: ["Action", "Thriller"] },
  { title: "The Dark Knight", year: 2008, rating: 9.0, genre: ["Action", "Crime"] },
  { title: "Pulp Fiction", year: 1994, rating: 8.9, genre: ["Crime", "Drama"] }
];

// Function that displays all movies nicely
function displayAllMovies(movieArray) {
  console.log("\n=== ALLE FILM ===");
  for (const movie of movieArray) {
    console.log(displayMovieInfo(movie)); // Genbruger vores funktion!
  }
}

// Test funktionen med vores film database
displayAllMovies(allMovies);