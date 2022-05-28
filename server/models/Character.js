//Import of Mongoose and call Schema from it  
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema properties definition
const characterSchema = new Schema({
    name: { type: String, required: true },
    height: { type: String, required: true },
    mass: { type: String, required: true },
    gender: { type: String, required: true },
    birth_year: { type: String, required: true },
    image: { type: String, required: true },
    home_world: { type: mongoose.Types.ObjectId, ref: 'Planet'} ,
    films: [{ type: mongoose.Types.ObjectId, ref: 'Film' }],     
}, {
    timestamps: true
});

//Cretion of the model using the Schema and export
const Character = mongoose.model("Character", characterSchema);
module.exports = Character;
