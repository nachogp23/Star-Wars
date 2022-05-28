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
    image: "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest/scale-to-width-down/350?cb=20131214162357",
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
    image: "https://static.wikia.nocookie.net/esstarwars/images/4/4a/Alderaan.jpg/revision/latest/scale-to-width-down/350?cb=20100723184830",
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
    image: "https://static.wikia.nocookie.net/esstarwars/images/a/a0/Eaw_Yavin4.jpg/revision/latest/scale-to-width-down/350?cb=20080127231835",
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
    image: "https://static.wikia.nocookie.net/esstarwars/images/1/1d/Hoth_SWCT.png/revision/latest/scale-to-width-down/350?cb=20170802030704",
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
    image: "https://static.wikia.nocookie.net/esstarwars/images/1/1c/Dagobah.jpg/revision/latest/scale-to-width-down/350?cb=20061117132132",
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
    image: "https://static.wikia.nocookie.net/esstarwars/images/1/11/Bespin-SWCT.png/revision/latest/scale-to-width-down/350?cb=20170924173926",
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
    image: "https://static.wikia.nocookie.net/esstarwars/images/e/e5/Endor-SWCT.png/revision/latest/scale-to-width-down/350?cb=20170629180854",
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
    image: "https://static.wikia.nocookie.https://static.wikia.nocookie.net/esstarwars/images/f/f0/Naboo_planet.png/revision/latest/scale-to-width-down/350?cb=20190928214307/esstarwars/images/e/e5/Endor-SWCT.png/revision/latest/scale-to-width-down/350?cb=20170629180854",
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
    image: "https://static.https://static.wikia.nocookie.net/esstarwars/images/8/84/CoruscantGlobeE1.png/revision/latest/scale-to-width-down/250?cb=20190503173154.nocookie.https://static.wikia.nocookie.net/esstarwars/images/f/f0/Naboo_planet.png/revision/latest/scale-to-width-down/350?cb=20190928214307/esstarwars/images/e/e5/Endor-SWCT.png/revision/latest/scale-to-width-down/350?cb=20170629180854",
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
    image: "https://https://static.wikia.nocookie.net/esstarwars/images/5/52/Kamino-DB.png/revision/latest/scale-to-width-down/350?cb=20160913200828.https://static.wikia.nocookie.net/esstarwars/images/8/84/CoruscantGlobeE1.png/revision/latest/scale-to-width-down/250?cb=20190503173154.nocookie.https://static.wikia.nocookie.net/esstarwars/images/f/f0/Naboo_planet.png/revision/latest/scale-to-width-down/350?cb=20190928214307/esstarwars/images/e/e5/Endor-SWCT.png/revision/latest/scale-to-width-down/350?cb=20170629180854",
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
