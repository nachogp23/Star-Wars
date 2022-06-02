//------------------ START IMPORTS -----------------------
const express = require("express");
//Require af LOCAL files 
const Character = require("../models/Character");
//Import of the Midleware to protect routes
const authentication = require("../utils/auth");
//------------------ END IMPORTS -----------------------

//Create Characters router
const charactersRouter = express.Router();

//Methods calls definitions
//Get all characters route
charactersRouter.get("/", (req, res, next) => {
    //definning the filter for character search
    let filter = {};

    if(req.query.name) {
        filter = {...filter, name: req.query.name};
    };

    //Filter by name on Characters collection 
    return Character.find(filter)
        //Return 500 status if the charcater searched is not found
        .then(charactersReaded => {
            if(charactersReaded == "") {
                return res.status(500).json("Something is wrong");
            }
            //Return character found with status 200
            return res.status(200).json(charactersReaded);
        })
        //If an error occurs, pass it to Error Midleware using next() method
        .catch((err) => {
            const error = new Error(err);
            error.status = 500;
            return next(error);
        });
});

//Get one Character by ID route
charactersRouter.get("/:id", (req, res, next) => {
    const id = req.params.id;
    return Character.findById(id)
        .then((character) => {
            if (!character) {
                const error = new Error(`Character with id ${id} not found in DB`);
                error.status = 404;
                return next(error);
            }
            return res.status(200).json(character);
        })
        .catch((err) => {
            const error = new Error(err);
            error.status= 500;
            return next(error);
        });
});

//Route to create new character on DataBase
charactersRouter.post("/", authentication, (req, res, next) => {
     
    const newCharacter = new Character(req.body);
    //console.log(req.body);
    //debugger;

    return newCharacter.save()
        .then(() => {
            return res.status(201).json(newCharacter);
        })
        .catch(err => {
            const error = new Error(err);
            error.status = 500;
            return next(error);
        });
});

//Route to update Characters
charactersRouter.put("/:id", authentication,async (req, res, next) => {
    const id = req.params.id;
    return Character.findByIdAndUpdate(id, {$set: req.body}, {new: true})
        .then(characterUpdated => {
            return res.status(200).json(characterUpdated);
        })
        .catch(err => {
            const error = new Error(err);
            error.status = 500;
            return next(error);
        });
});

//Route to delete one Character
charactersRouter.delete("/:id", authentication,(req, res, next) => {
    const id = req.params.id;
    return Character.findByIdAndDelete(id)
        .then(() => {
            return res.status(200).json(`Character with ID: ${id} deleted`);
        })
        .catch((err) => {
            const error = new Error(err);
            error.status = 500;
            return next(error);
        });
});

//Route to add Films and Planets to Characters using IDs
charactersRouter.post("/:id/films&planets", (req, res, next) => {
    const characterId = req.params.id;
    const filmId = req.body.filmId;
    const planetId = req.body.planetId;

    return Character.findByIdAndUpdate(
        characterId,
        { $push: { films: filmId, home_world: planetId} }, { new: true }
        )
        .then(characterUpdated => {
            return res.status(200).json(characterUpdated);
        })
        .catch(err => {
            const error = new Error(err);
            error.status = 500;
            return next(error);
        })
});

//Export the router for Characters path
module.exports = charactersRouter;


