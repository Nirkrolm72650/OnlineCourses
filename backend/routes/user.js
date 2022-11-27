const express = require("express");
const {updateUser, deleteUser, getUserById, getAllUser} = require("../controllers/user.js");

const router = express.Router();

// CREATE

// UPDATE
router.put('/:id', updateUser);

// DELETE
router.delete('/:id', deleteUser);

// GET
router.get('/:id', getUserById);

// GET ALL
router.get('/', getAllUser);

module.exports = router;