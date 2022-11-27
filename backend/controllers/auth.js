const User = require('../models/User.js');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");


// Création du controlleur inscription
exports.inscription = async (req, res, next) => {
    try{
        const salt = await bcrypt.genSalt(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            ...req.body,
            password: hash,
        });

        await newUser.save();
        res.status(200).send("L'utilisateur a bien été créé");
    }catch (err){
        next(err);
    }
}

// Création du controlleur connexion
exports.connexion = async (req, res, next) => {

}