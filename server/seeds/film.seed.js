//File to poblate DB with some initial characters
//------------------ START IMPORTS -----------------------
const mongoose = require("mongoose");
//Require af all LOCAL files 
const dataBase = require("../database");
const Film = require("../models/Film");
//------------------ END IMPORTS -----------------------

//Array with initial characters to poblate DB
const films = [
  {
    title: "a new hope",
    episode_id: 4,
    director: "George Lucas",
    producer: ["Gary Kurtz", "Rick McCallum"],
    release_date: "1977-05-25",
    image: "https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg",
    //characters: [],
    //planets: [],
  },
  {
    title: "the empire strikes back",
    episode_id: 5,
    director: "Irvin Kershner",
    producer: ["Gary Kurtz", "Rick McCallum"],
    release_date: "1980-05-17",
    image: "https://upload.wikimedia.org/wikipedia/en/3/3f/The_Empire_Strikes_Back_%281980_film%29.jpg",
    //characters: [],
    //planets: [],
  },
  {
    title: "return of the jedi",
    episode_id: 6,
    director: "Richard Marquand",
    producer: ["Howard G. Kazanjian", "George Lucas", "Rick McCallum"],
    release_date: "1983-05-25",
    image: "https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg",
    //characters: [],
    //planets: [],
  },
  {
    title: "the phantom menace",
    episode_id: 1,
    director: "George Lucas",
    producer: [ "Rick McCallum"],
    release_date: "1999-05-19",
    image: "https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg",
    //characters: [],
    //planets: [],
  },
  {
    title: "Attack of the clones",
    episode_id: 2,
    director: "George Lucas",
    producer: [ "Rick McCallum"],
    release_date: "2002-05-16",
    image: "https://upload.wikimedia.org/wikipedia/en/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg",
    //characters: [],
    //planets: [],
  },
  {
    title: "revenge of the sith",
    episode_id: 3,
    director: "George Lucas",
    producer: [ "Rick McCallum"],
    release_date: "2005-05-19",
    image: "https://upload.wikimedia.org/wikipedia/en/7/78/Star_Wars_Episode_III_cover.png",
    //characters: [],
    //planets: [],
  }
];

//For each character of the array create a new instance of the Character model
const filmsDocuemnts = films.map((film) => new Film(film));

//Connection with DB
dataBase.connect()

  //Search for previus elements in DB
//   .then(async() => {
//     const allFilms = await films.find();
//     //Delete previous elements if the exist
//     if (allFilms.length > 0) {
//       await Film.collection.drop();
//     }
//   })
//   .catch((err) => console.error(`Error deletting info from the DB: ${err}`))

  //Add the characters to the DB
  .then(async() => {
    await Film.insertMany(filmsDocuemnts);
  })
  .catch((err) => console.error(`Error adding character to the DB: ${err}`))
  //Close connection with DB
  .finally(() => mongoose.disconnect());
