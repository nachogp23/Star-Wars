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
    image: "https://static.wikia.nocookie.net/esstarwars/images/c/ce/EpisodioIV.jpg/revision/latest/scale-to-width-down/320?cb=20060419021011",
    //characters: [],
    //planets: [],
  },
  {
    title: "the empire strikes back",
    episode_id: 5,
    director: "Irvin Kershner",
    producer: ["Gary Kurtz", "Rick McCallum"],
    release_date: "1980-05-17",
    image: "https://https://static.wikia.nocookie.net/esstarwars/images/d/db/EpV.jpg/revision/latest/scale-to-width-down/322?cb=20060424015559.wikia.nocookie.net/esstarwars/images/c/ce/EpisodioIV.jpg/revision/latest/scale-to-width-down/320?cb=20060419021011",
    //characters: [],
    //planets: [],
  },
  {
    title: "return of the jedi",
    episode_id: 6,
    director: "Richard Marquand",
    producer: ["Howard G. Kazanjian", "George Lucas", "Rick McCallum"],
    release_date: "1983-05-25",
    image: "https://https://https://static.wikia.nocookie.net/esstarwars/images/b/b2/ReturnOfTheJediPoster1983.jpg/revision/latest/scale-to-width-down/322?cb=20200623214315.wikia.nocookie.net/esstarwars/images/d/db/EpV.jpg/revision/latest/scale-to-width-down/322?cb=20060424015559.wikia.nocookie.net/esstarwars/images/c/ce/EpisodioIV.jpg/revision/latest/scale-to-width-down/320?cb=20060419021011",
    //characters: [],
    //planets: [],
  },
  {
    title: "the phantom menace",
    episode_id: 1,
    director: "George Lucas",
    producer: [ "Rick McCallum"],
    release_date: "1999-05-19",
    image: "https://https://static.wikia.nocookie.net/esstarwars/images/d/dd/Star_Wars_epI.jpg/revision/latest/scale-to-width-down/321?cb=20060331023235://https://static.wikia.nocookie.net/esstarwars/images/b/b2/ReturnOfTheJediPoster1983.jpg/revision/latest/scale-to-width-down/322?cb=20200623214315.wikia.nocookie.net/esstarwars/images/d/db/EpV.jpg/revision/latest/scale-to-width-down/322?cb=20060424015559.wikia.nocookie.net/esstarwars/images/c/ce/EpisodioIV.jpg/revision/latest/scale-to-width-down/320?cb=20060419021011",
    //characters: [],
    //planets: [],
  },
  {
    title: "Attack of the clones",
    episode_id: 2,
    director: "George Lucas",
    producer: [ "Rick McCallum"],
    release_date: "2002-05-16",
    image: "https://https://static.https://static.wikia.nocookie.net/esstarwars/images/7/7c/Episode_two_poster.jpg/revision/latest/scale-to-width-down/337?cb=20060405025053.nocookie.net/esstarwars/images/d/dd/Star_Wars_epI.jpg/revision/latest/scale-to-width-down/321?cb=20060331023235://https://static.wikia.nocookie.net/esstarwars/images/b/b2/ReturnOfTheJediPoster1983.jpg/revision/latest/scale-to-width-down/322?cb=20200623214315.wikia.nocookie.net/esstarwars/images/d/db/EpV.jpg/revision/latest/scale-to-width-down/322?cb=20060424015559.wikia.nocookie.net/esstarwars/images/c/ce/EpisodioIV.jpg/revision/latest/scale-to-width-down/320?cb=20060419021011",
    //characters: [],
    //planets: [],
  },
  {
    title: "revenge of the sith",
    episode_id: 3,
    director: "George Lucas",
    producer: [ "Rick McCallum"],
    release_date: "2005-05-19",
    image: "https://https://static.https://static.wikia.nocookie.net/esstarwars/images/f/fa/Ep3_poster.jpg/revision/latest/scale-to-width-down/335?cb=20060407220934://static.wikia.nocookie.net/esstarwars/images/7/7c/Episode_two_poster.jpg/revision/latest/scale-to-width-down/337?cb=20060405025053.nocookie.net/esstarwars/images/d/dd/Star_Wars_epI.jpg/revision/latest/scale-to-width-down/321?cb=20060331023235://https://static.wikia.nocookie.net/esstarwars/images/b/b2/ReturnOfTheJediPoster1983.jpg/revision/latest/scale-to-width-down/322?cb=20200623214315.wikia.nocookie.net/esstarwars/images/d/db/EpV.jpg/revision/latest/scale-to-width-down/322?cb=20060424015559.wikia.nocookie.net/esstarwars/images/c/ce/EpisodioIV.jpg/revision/latest/scale-to-width-down/320?cb=20060419021011",
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
