//Import of Mongoose and call Schema from it  
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema properties definition
const planetSchema = new Schema({
    name: { type: String, required: true },
    rotation_period: { type: Number, required: true },
    orbital_period: { type: Number, required: true },
    diameter: { type: Number, required: true },
    climate: [{ type: String, required: true }],
    terrain: [{ type: String, required: true }],
    population: { type: Number, required: false },
    image: { type: String, required: true },
    characters: [{ type: mongoose.Types.ObjectId.name, ref: 'Character' }], 
    films: [{ type: mongoose.Types.ObjectId.name, ref: 'Film' }]    
}, {
    timestamps: true
});

//Cretion of the model using the Schema and export
const Planet = mongoose.model("Planet", planetSchema);
module.exports = Planet;