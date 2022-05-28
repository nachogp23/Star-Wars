//------------------ START IMPORTS -----------------------
const jwt = require("jsonwebtoken");
//import local files
const config = require("../config");
//------------------ END IMPORTS -----------------------

//Midleware to verify if exists a valid token in the requests header
const verifyToken = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, config.JWT_SECRET);
        next();
    } catch (error) {
        res.status(401).json({message: "No token provided"});
    }
};

module.exports = verifyToken;
