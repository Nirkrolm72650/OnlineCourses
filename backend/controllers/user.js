const User = require('../models/User.js');

// CREATE

// UPDATE
exports.updateUser = async (req, res, next) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true});
        res.status(200).json(user);
    }catch(err){
        next(err);
    }
}

// DELETE
exports.deleteUser = async (req, res, next) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json("Utilisateur supprimé");
    }catch(err){
        next(err);
    }
}

// GET BY ID
exports.getUserById = async (req, res, next) => {
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    }catch (err){
        next(err);
    }
}

// GET ALL
exports.getAllUser = async (req, res, next) => {
    try{
        const user = await User.find();
        res.status(200).json(user);
    }catch(err){
        next(err);
    }
}