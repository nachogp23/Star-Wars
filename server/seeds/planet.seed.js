//File to poblate DB with some initial characters
//------------------ START IMPORTS -----------------------
const mongoose = require("mongoose");
//Require af all LOCAL files 
const dataBase = require("../database");
const Planet = require("../models/Planet");
//------------------ END IMPORTS -----------------------

//Array with initial characters to poblate DB
const planets = [
  {
    name: "Tatooine",
    rotation_period: 23,
    orbital_period: 304,
    diameter: 10465,
    climate: "arid",
    terrain: "desert",
    population: 200000,
    image: "https://media.gq.com.mx/photos/5e2368ce73e13600083c0175/master/pass/nasa-planeta-tatooine-star-wars.jpg",
    //characters: [""],
    //films: "",
  },
  {
    name: "Alderaan",
    rotation_period: 24,
    orbital_period: 364,
    diameter: 12500,
    climate: "temperate",
    terrain: ["grasslands", "mountains"],
    population: 200000000,
    image: "https://frikipolis.com/wp-content/uploads/2022/01/Aldera_City.png",
    //characters: [""],
    //films: "",
  },
  {
    name: "Yavin IV",
    rotation_period: 24,
    orbital_period: 4818,
    diameter: 10200,
    climate: ["temperate", "tropical"],
    terrain: ["jungle", "rainforests"],
    population: 1000,
    image: "https://upload.wikimedia.org/wikipedia/commons/7/72/Tikal_temples_1_2_3_5_2009.JPG",
    //characters: [""],
    //films: "",
  },
  {
    name: "Hoth",
    rotation_period: 23,
    orbital_period: 549,
    diameter: 7200,
    climate: ["frozen"],
    terrain: ["tundra", "ice caves", "mountain ranges"],
    //population: 1000,
    image: "https://pm1.narvii.com/6592/17fa9c214dad4ac1671fb301286aa9095e3a5dab_hq.jpg",
    //characters: [""],
    //films: "",
  },
  {
    name: "Dagobah",
    rotation_period: 23,
    orbital_period: 341,
    diameter: 8900,
    climate: ["murky"],
    terrain: ["swamp", "jungles"],
    //population: 1000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Yoda_I_know_you%27re_in_there%21.jpg/275px-Yoda_I_know_you%27re_in_there%21.jpg",
    //characters: [""],
    //films: "",
  },
  {
    name: "Bespin",
    rotation_period: 12,
    orbital_period: 5110,
    diameter: 118000,
    climate: ["temperate"],
    terrain: ["gas giant"],
    population: 6000000,
    image: "https://data2.origin.com/content/dam/originx/web/app/games/bastion/Screenshots/SWBF_dlc_screenhi_930x524_en_US_bespin_cloud5_v1.jpg",
    //characters: [""],
    //films: "",
  },
  {
    name: "Endor",
    rotation_period: 18,
    orbital_period: 402,
    diameter: 4900,
    climate: ["temperate"],
    terrain: ["forests", "mountains", "lakes"],
    population: 30000000,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Redwood_slope.jpg",
    //characters: [""],
    //films: "",
  },
  {
    name: "Naboo",
    rotation_period: 26,
    orbital_period: 312,
    diameter: 12120,
    climate: ["temperate"],
    terrain: ["grassy hills", "swamps", "forests", "mountains"],
    population: 4500000000,
    image: "https://frikipolis.com/wp-content/uploads/2022/04/nabo_ya2r.jpg",
    //characters: [""],
    //films: "",
  },
  {
    name: "Coruscant",
    rotation_period: 24,
    orbital_period: 368,
    diameter: 12240,
    climate: ["temperate"],
    terrain: ["cityscape", "mountains"],
    population: 1000000000000,
    image: "https://www.cinemascomics.com/wp-content/uploads/2022/01/coruscant-star-wars.jpg",
    //characters: [""],
    //films: "",
  },
  {
    name: "Kamino",
    rotation_period: 27,
    orbital_period: 463,
    diameter: 19720,
    climate: ["temperate"],
    terrain: ["ocean"],
    population: 1000000000,
    image: "https://pm1.narvii.com/6594/9a9044c1ef56788efcbe4b4015043a306b49ece6_hq.jpg",
    //characters: [""],
    //films: "",
  }


  
];

//For each character of the array create a new instance of the Character model
const planetsDocuemnts = planets.map((planet) => new Planet(planet));

//Connection with DB
dataBase.connect()

  //Search for previus elements in DB
//   .then(async() => {
//     const allPlanets = await planets.find();
//     //Delete previous elements if the exist
//     if (allPlanets.length > 0) {
//       await Planet.collection.drop();
//     }
//   })
//   .catch((err) => console.error(`Error deletting info from the DB: ${err}`))

  //Add the characters to the DB
  .then(async() => {
    await Planet.insertMany(planetsDocuemnts);
  })
  .catch((err) => console.error(`Error adding planet to the DB: ${err}`))
  //Close connection with DB
  .finally(() => mongoose.disconnect());
