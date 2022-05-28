//Import of Mongoose and call Schema from it  
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Import of Mongoose Unique Validator, to ensure unique emails for users
const uniqueValidator = require("mongoose-unique-validator");

//Schema properties definition
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    character: [{ type: mongoose.Types.ObjectId, ref: 'Character'}]
}, {
    timestamps: true
})

//Definning the message to show if the email is already in use
userSchema.plugin(uniqueValidator, {message: "Email already in use"});

//Cretion of the model using the Schema and export
const User = mongoose.model("User", userSchema);
module.exports = User;