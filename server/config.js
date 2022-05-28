require("dotenv").config();

const config = {
    PORT: process.env.PORT || 3000,
    DB_URL: process.env.DB_URL || "mongodb+srv://nachogo23:1392250@firstcluster.jzevn.mongodb.net/StarWars?retryWrites=true&w=majority",
    JWT_SECRET: process.env.JWT_SECRET || "StarWarsSecret"
}

console.log("config", config);

module.exports = config;