//Import of Mongoose and call Schema from it  
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema properties definition
const filmSchema = new Schema({
    title: { type: String, required: true },
    episode_id: { type: Number, required: true },
    director: { type: String, required: true },
    producer: [{ type: String, required: true }],
    release_date: { type: String, required: true },
    image: { type: String, required: true },
    characters: [{ type: mongoose.Types.ObjectId, ref: 'Character' }], 
    planets: [{ type: mongoose.Types.ObjectId, ref: 'Planet' }]    
}, {
    timestamps: true
});

//Cretion of the model using the Schema and export
const Film = mongoose.model("Film", filmSchema);
module.exports = Film;