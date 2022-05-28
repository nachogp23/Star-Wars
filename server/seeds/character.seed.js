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
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/luke-skywalker-mejor-personaje-star-wars-1626168723.jpg?crop=1xw:1xh;center,top&resize=980:*",
    //home_world: {},
    //films: [],
  },
  {
    name: "C-3P0",
    height: 167,
    mass: 75,
    gender: "N/A",
    birth_year: "112BBY",
    image: "https://en.wikipedia.org/wiki/C-3PO#/media/File:C-3PO_droid.png",
    //home_world: {},
    //films: [],
  },
  {
    name: "R2-D2",
    height: 96,
    mass: 32,
    gender: "N/A",
    birth_year: "33BBY",
    image: "https://en.wikipedia.org/wiki/C-3PO#/media/File:C-https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/R2-D2_-_Genuine_Movie_Star.jpg/800px-R2-D2_-_Genuine_Movie_Star.jpg.png",
    //home_world: {},
    //films: [],
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    gender: "male",
    birth_year: "41.9BBY",
    image: "https://en.https://upload.wikimedia.org/wikipedia/commons/3/32/Star_Wars_-_Darth_Vader.jpg.org/wiki/C-3PO#/media/File:C-https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/R2-D2_-_Genuine_Movie_Star.jpg/800px-R2-D2_-_Genuine_Movie_Star.jpg.png",
    //home_world: {},
    //films: [],
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    gender: "female",
    birth_year: "19BBY",
    image: "https://en.https://upload.wikimedia.org/wikipedia/commons/d/d4/SWC4_-_Costume_Pageant-_Princess_Leia_%28514396508%29.jpg://upload.wikimedia.org/wikipedia/commons/3/32/Star_Wars_-_Darth_Vader.jpg.org/wiki/C-3PO#/media/File:C-https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/R2-D2_-_Genuine_Movie_Star.jpg/800px-R2-D2_-_Genuine_Movie_Star.jpg.png",
    //home_world: {},
    //films: [],
  },
  {
    name: "Obi-Wan Kenobi",
    height: 182,
    mass: 77,
    gender: "male",
    birth_year: "57BBY",
    image: "https://en.https://static.wikia.nocookie.net/starwars/images/7/74/OWK-SWFB.png/revision/latest/scale-to-width-down/900?cb=20200822034351://upload.wikimedia.org/wikipedia/commons/d/d4/SWC4_-_Costume_Pageant-_Princess_Leia_%28514396508%29.jpg://upload.wikimedia.org/wikipedia/commons/3/32/Star_Wars_-_Darth_Vader.jpg.org/wiki/C-3PO#/media/File:C-https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/R2-D2_-_Genuine_Movie_Star.jpg/800px-R2-D2_-_Genuine_Movie_Star.jpg.png",
    //home_world: {},
    //films: [],
  },
  {
    name: "Yoda",
    height: 66,
    mass: 13,
    gender: "male",
    birth_year: "896BBY",
    image: "https://static.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png/revision/latest/scale-to-width-down/500?cb=20150206140125",
    //home_world: {},
    //films: [],
  },
  {
    name: "Owen Lars",
    height: 178,
    mass: 120,
    gender: "male",
    birth_year: "52BBY",
    image: "https://static.wikia.nocookie.net/https://static.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png/revision/latest/scale-to-width-down/1000?cb=20171108050140/images/d/d6/Yoda_SWSB.png/revision/latest/scale-to-width-down/500?cb=20150206140125",
    //home_world: {},
    //films: [],
  },
  {
    name: "Beru Whitesun lars",
    height: 165,
    mass: 75,
    gender: "female",
    birth_year: "47BBY",
    image: "https://static.wikia.https://static.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png/revision/latest/scale-to-width-down/499?cb=20170713063118.net/https://static.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png/revision/latest/scale-to-width-down/1000?cb=20171108050140/images/d/d6/Yoda_SWSB.png/revision/latest/scale-to-width-down/500?cb=20150206140125",
    //home_world: {},
    //films: [],
  },
  {
    name: "R5-D4",
    height: 97,
    mass: 32,
    gender: "N/A",
    birth_year: "unknow",
    image: "https://static.wikia.https://https://static.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png/revision/latest/scale-to-width-down/500?cb=20160809033145.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png/revision/latest/scale-to-width-down/499?cb=20170713063118.net/https://static.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png/revision/latest/scale-to-width-down/1000?cb=20171108050140/images/d/d6/Yoda_SWSB.png/revision/latest/scale-to-width-down/500?cb=20150206140125",
    //home_world: {},
   // films: [],
  },
  {
    name: "Biggs Darklighter",
    height: 183,
    mass: 84,
    gender: "male",
    birth_year: "24BBY",
    image: "https://https://static.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png/revision/latest/scale-to-width-down/350?cb=20130305010406.wikia.https://https://static.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png/revision/latest/scale-to-width-down/500?cb=20160809033145.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png/revision/latest/scale-to-width-down/499?cb=20170713063118.net/https://static.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png/revision/latest/scale-to-width-down/1000?cb=20171108050140/images/d/d6/Yoda_SWSB.png/revision/latest/scale-to-width-down/500?cb=20150206140125",
    //home_world: {},
    //films: [],
  },
  {
    name: "Chewbacca",
    height: 230,
    mass: 120,
    gender: "male",
    birth_year: "200ABY",
    image: "https://static.wikia.nocookie.net/esstarwars/images/5/51/Chewbacca_TLJ.PNG/revision/latest/scale-to-width-down/350?cb=20190419143715",
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


