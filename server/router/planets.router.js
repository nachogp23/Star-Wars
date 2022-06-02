//------------------ START IMPORTS -----------------------
const express = require("express");
//Require af LOCAL files 
const Planet = require("../models/Planet");
//Import of the Midleware to protect routes
//------------------ END IMPORTS -----------------------

//Create Planets router
const planetsRouter = express.Router();

//Methods calls definitions

//Get all planets route
planetsRouter.get("/", (req, res, next) => {
    //definning the filter for character search
    let filter = {};

    if(req.query.name) {
        filter = {...filter, name: req.query.name};
    };

    //Filter by film title on Films collection 
    return Planet.find(filter)
        //Return 500 status if the planet searched is not found
        .then(planetReaded => {
            if(planetReaded == "") {
                return res.status(500).json("Something is wrong");
            }
            //Return planet found with status 200
            return res.status(200).json(planetReaded);
        })
        //If an error occurs, pass it to Error Midleware using next() method
        .catch((err) => {
            const error = new Error(err);
            error.status = 500;
            return next(error);
        });
});

//Get one Planet by ID route
planetsRouter.get("/:id", (req, res, next) => {
    const id = req.params.id;
    return Planet.findById(id)
        .then((planet) => {
            if (!planet) {
                const error = new Error(`Planet with id ${id} not found in DB`);
                error.status = 404;
                return next(error);
            }
            return res.status(200).json(planet);
        })
        .catch((err) => {
            const error = new Error(err);
            error.status= 500;
            return next(error);
        });
});

//Route to create new planet on DataBase
planetsRouter.post("/", (req, res, next) => {
     
    const newPlanet = new Planet(req.body);

    return newPlanet.save()
        .then(() => {
            return res.status(201).json(`New Planet created: ${newPlanet}`);
        })
        .catch(err => {
            const error = new Error(err);
            error.status = 500;
            return next(error);
        });
});

//Route to update/modify Planets
planetsRouter.put("/:id", (req, res, next) => {
    const id = req.params.id;
    return Planet.findByIdAndUpdate(id, {$set: req.body}, {new: true})
        .then(planetUpdated => {
            return res.status(200).json(planetUpdated);
        })
        .catch(err => {
            const error = new Error(err);
            error.status = 500;
            return next(error);
        });
});

//Route to delete one Planet
// planetsRouter.delete("/:id", (req, res, next) => {
//     const id = req.params.id;
//     return Planet.findByIdAndDelete(id)
//         .then(() => {
//             return res.status(200).json(`Planet with ID: ${id} deleted`);
//         })
//         .catch((err) => {
//             const error = new Error(err);
//             error.status = 500;
//             return next(error);
//         });
// });

//Export the router for Characters path
module.exports = planetsRouter;