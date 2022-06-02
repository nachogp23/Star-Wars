//------------------ START IMPORTS -----------------------
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { check, validationResult } = require('express-validator');
//Require af LOCAL files 
//Import of the Midleware to protect routes
const authentication = require("../utils/auth");
const User = require("../models/User");
const config = require("../config");
//------------------ END IMPORTS -----------------------

const hashIterations = 10;
//cretae User route
const usersRouter = express.Router();

//Register route
//Validations before generating new User
usersRouter.post("/register", [
    check("name")
    .not()
    .isEmpty()
    .isLength({min: 3})
    .withMessage("name must be at least 3 characters long"),
    check("email", "Email is requiered")
    .not()
    .isEmpty(),
    check("password", "Password should be between 5 to 10 characters long")
    .not()
    .isEmpty()
    .isLength({min: 5, max:10})
 ],
 (req, res, next) => {
    const errors = validationResult(req);
    //If there are no errors during validations, create the user
    if(!errors.isEmpty()) {
        return res.status(422).jsonp(errors.array());
    } else {
        //Encrypt the password and then create a new user and save it on DB.
        bcrypt.hash(req.body.password, hashIterations).then((hash) => {
            const user = new User({
                name: req.body.name,
                email: req.body.email,
                password: hash,
                character: req.body.character 
            });
            user.save().then((response) => {
                res.status(201).json(response);
            }).catch(err => {
            const error = new Error(err)
            error.status = 500;
            return next(error);
            });
        });
    }

 });

 //Sign in Route
usersRouter.post("/signin", (req, res, next) => {
    User.findOne({email: req.body.email})
    .then(user => {
        if(!user) {
            return res.status(401).json("Authentication failed, user does not exist");
        }
        return bcrypt.compare(req.body.password, user.password).then((result) => {
            if(!result) {
                return res.status(401).json("Authentication failed, password wrong");
            }

            let jwtToken = jwt.sign(
                {
                    email: req.body.email,
                    userId: user._id     
                }, config.JWT_SECRET,
                {
                    expiresIn: "1h",
                }
            );
        
            res.status(200).json({
                token: jwtToken,
                expiresIn: 360,
                _id: user._id,
                email: user.email,
                name: user.name
            });
        });
    });
});


//Routh to get all users
usersRouter.get("/get-users", authentication, (_req, res, next) => {
    User.find((error, response) => {
        if(error) {
            return next(error);
        } else {

            return res.status(200).json(response);
        }
    });
});

//Route to get one User
usersRouter.get("/get-users/:id", authentication , (req, res, next) => {
    const id = req.params.id;
    User.findById(id, (err, data) => {
        if(err) {
            return next(err);
        } else {
            return res.status(200).json(data);
        }
    });
});

//Route to modify User info
usersRouter.put("/update-user/:id", authentication, (req, res, next) => {
    const id = req.params.id;
    User.findByIdAndUpdate(
        id, 
        {$set: req.body}, 
        (err, data) => {
            if(err) {
                return next (err);
            } else {
                console.log("User succesfully updated");
                return res.status(200).json(data);
            }
        }
    );
}); 

//Route to delete User 
usersRouter.delete("/delete-user/:id", authentication,(req, res, next) => {
    const id = req.params.id;
    User.findByIdAndDelete(id, (err, data) => {
        if (err) {
            return next(err);
        } else {
            return res.status(200).json(data);
        }
    });
});

module.exports = usersRouter;