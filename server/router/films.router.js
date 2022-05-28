//------------------ START IMPORTS -----------------------
const express = require("express");
//Require af LOCAL files 
const Film = require("../models/Film");
//Import of the Midleware to protect routes
const authentication = require("../utils/auth");
//------------------ END IMPORTS -----------------------

//Create Films router
const filmsRouter = express.Router();

//Methods calls definitions

//Get all films route
filmsRouter.get("/", (req, res, next) => {
    //definning the filter for character search
    let filter = {};

    if(req.query.title) {
        filter = {...filter, name: req.query.title};
    };

    //Filter by film title on Films collection 
    return Film.find(filter)
        //Return 500 status if the film searched is not found
        .then(filmReaded => {
            if(filmReaded == "") {
                return res.status(500).json("Something is wrong");
            }
            //Return film found with status 200
            return res.status(200).json(filmReaded);
        })
        //If an error occurs, pass it to Error Midleware using next() method
        .catch((err) => {
            const error = new Error(err);
            error.status = 500;
            return next(error);
        });
});

//Get one Film by ID route
filmsRouter.get("/:id", (req, res, next) => {
    const id = req.params.id;
    return Film.findById(id)
        .then((film) => {
            if (!film) {
                const error = new Error(`Film with id ${id} not found in DB`);
                error.status = 404;
                return next(error);
            }
            return res.status(200).json(film);
        })
        .catch((err) => {
            const error = new Error(err);
            error.status= 500;
            return next(error);
        });
});

//Route to create new film on DataBase
// filmsRouter.post("/", (req, res, next) => {
     
//     const newFilm = new Film(req.body);

//     return newFilm.save()
//         .then(() => {
//             return res.status(201).json(`New Film created: ${newFilm}`);
//         })
//         .catch(err => {
//             const error = new Error(err);
//             error.status = 500;
//             return next(error);
//         });
// });

//Route to update/modify Films
filmsRouter.put("/:id", (req, res, next) => {
    const id = req.params.id;
    return Film.findByIdAndUpdate(id, {$set: req.body}, {new: true})
        .then(filmUpdated => {
            return res.status(200).json(filmUpdated);
        })
        .catch(err => {
            const error = new Error(err);
            error.status = 500;
            return next(error);
        });
});

//Route to delete one Film
// filmsRouter.delete("/:id", (req, res, next) => {
//     const id = req.params.id;
//     return Film.findByIdAndDelete(id)
//         .then(() => {
//             return res.status(200).json(`Film with ID: ${id} deleted`);
//         })
//         .catch((err) => {
//             const error = new Error(err);
//             error.status = 500;
//             return next(error);
//         });
// });

//Export the router for Characters path
module.exports = filmsRouter;


