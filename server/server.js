//Require of all dependencies we need
//------------------ START IMPORTS -----------------------
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
//Require af LOCAL files 
const config = require("./config");
const dataBase = require("./database");
const charactersRouter = require("./router/characters.router");
const filmsRouter = require("./router/films.router");
const planetsRouter = require("./router/planets.router");
const usersRouter = require("./router/users.router");
//Import of file with most common HTTP errors 
const HTTPSTATUSCODE = require("./utils/httpStatusCode");
//------------------ END IMPORTS -----------------------

//Start the server with express
const server = express();

//JWT config
server.set("jwt-secret", config.JWT_SECRET || "StarWarsSecret");

//-------------------START  CORS------------------------
//Config of response's headers for CORS use
server.use((req, res, next) => {
    res.header("Acces-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Acces-Control-Allow-Credentials", true);
    res.header("Acces-Control-Allow-Headers", "Content-Type");
    next();
});

//CORS config
server.use(cors({
    origin: ['http://localhost:4500', 'http://localhost:3000'],
    credentials: true,
}));
//-------------------END  CORS------------------------

//Server config for send and receive JSON data in BODY of requests
server.use(express.json());
server.use(express.urlencoded({extended:false}));

server.use(logger("dev"));

//Server static resources
server.use("/public", express.static("public"));

//Initial Server message
server.get("/", (_req, res) => {
    res.status(200).send("Server is Up and running");
});

//---------------------START CALL TO ROUTERS---------------------
server.use("/characters", charactersRouter);
server.use("/films", filmsRouter);
server.use("/planets", planetsRouter);
server.use("/users", usersRouter);
//----------------------END CALL TO ROUTERS-----------------------

//call to Error 404 when the route is not found
server.use("*", (_req,_res, next) => {
    const error = new Error("Route not found");
    error.status = 404;
    error.message = HTTPSTATUSCODE[404];
    return next(error);
});

//Middleware Error handler
server.use((err, _req, res, _next) => {
    return res
        .status(err.status || 500)
        .json(err.message || HTTPSTATUSCODE[500]);
});

//Dissable showing NodeJS info 
server.disable("x-powered-by");

//Start connection with DB and then make the server listen to the configured PORT
dataBase.connect().then(() => {
    console.log("Connection with MongoDB done!");
    server.listen(config.PORT, () => {
        console.log(`Node server listening on PORT: ${config.PORT}`);
    })
})


 