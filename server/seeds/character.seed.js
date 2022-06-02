//File to poblate DB with some initial characters
//------------------ START IMPORTS -----------------------
const mongoose = require("mongoose");
//Require af all LOCAL files 
const dataBase = require("../database");
const Character = require("../models/Character");
//------------------ END IMPORTS -----------------------

//Array with initial characters to poblate DB
const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    gender: "male",
    birth_year: "19BBY",
    image: "https://smoda.elpais.com/wp-content/uploads/2019/12/2-look.jpg"
    //home_world: {},
    //films: [],
  },
  {
    name: "C-3P0",
    height: 167,
    mass: 75,
    gender: "N/A",
    birth_year: "112BBY",
    image: "https://upload.wikimedia.org/wikipedia/en/5/5c/C-3PO_droid.png",
    //home_world: {},
    //films: [],
  },
  {
    name: "R2-D2",
    height: 96,
    mass: 32,
    gender: "N/A",
    birth_year: "33BBY",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/R2-D2_-_Genuine_Movie_Star.jpg/800px-R2-D2_-_Genuine_Movie_Star.jpg",
    //home_world: {},
    //films: [],
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    gender: "male",
    birth_year: "41.9BBY",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Star_Wars_-_Darth_Vader.jpg",
    //home_world: {},
    //films: [],
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    gender: "female",
    birth_year: "19BBY",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/SWC4_-_Costume_Pageant-_Princess_Leia_%28514396508%29.jpg",
    //home_world: {},
    //films: [],
  },
  {
    name: "Obi-Wan Kenobi",
    height: 182,
    mass: 77,
    gender: "male",
    birth_year: "57BBY",
    image: "https://imgwoman.elperiodico.com/73/3c/c0/ewan-mcgregor-caracterizado-obi-wan-kenobi.jpg",
    //home_world: {},
    //films: [],
  },
  {
    name: "Yoda",
    height: 66,
    mass: 13,
    gender: "male",
    birth_year: "896BBY",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Dereck_Hard_Yoda_-_Little_Reality_2016_%28cropped%29.jpg",
    //home_world: {},
    //films: [],
  },
  {
    name: "Owen Lars",
    height: 178,
    mass: 120,
    gender: "male",
    birth_year: "52BBY",
    image: "https://seriepolis.com/wp-content/uploads/2019/10/Joel-Edgerton-Star-Wars-960x901.jpg",
    //home_world: {},
    //films: [],
  },
  {
    name: "Beru Whitesun lars",
    height: 165,
    mass: 75,
    gender: "female",
    birth_year: "47BBY",
    image: "https://i.pinimg.com/736x/2b/bb/71/2bbb712405c574c6ce78730e00464a8e--star-wars-characters-star-wars-episodes.jpg",
    //home_world: {},
    //films: [],
  },
  {
    name: "R5-D4",
    height: 97,
    mass: 32,
    gender: "N/A",
    birth_year: "unknow",
    image: "https://atlantica30.com/content/images/thumbs/0021492_star-wars-figura-16-r5-d4-22-cm.jpeg",
    //home_world: {},
   // films: [],
  },
  {
    name: "Biggs Darklighter",
    height: 183,
    mass: 84,
    gender: "male",
    birth_year: "24BBY",
    image: "https://cdn.toypro.com/media/cache/ks_product_detail_normal/uploads/images/custom/34392-src.jpg",
    //home_world: {},
    //films: [],
  },
  {
    name: "Chewbacca",
    height: 230,
    mass: 120,
    gender: "male",
    birth_year: "200ABY",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Solo-_A_Star_Wars_Story_Japan_Premiere_Red_Carpet-_Chewbacca.jpg",
    //home_world: {},
    //films: [],
  },
];

//For each character of the array create a new instance of the Character model
const charactersDocuments = characters.map((character) => new Character(character));

//Connection with DB
dataBase.connect()

  // //Search for previus elements in DB
  // .then(async() => {
  //   const allCharacters = await characters.find();
  //   //Delete previous elements if the exist
  //   if (allCharacters.length > 0) {
  //     await Character.collection.drop();
  //   }
  // })
  // .catch((err) => console.error(`Error deletting info from the DB: ${err}`))

  //Add the characters to the DB
  .then(async() => {
    await Character.insertMany(charactersDocuments);
  })
  .catch((err) => console.error(`Error adding character to the DB: ${err}`))
  //Close connection with DB
  .finally(() => mongoose.disconnect());


