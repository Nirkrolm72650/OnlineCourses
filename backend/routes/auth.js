const express = require('express');
const {inscription} = require('../controllers/auth.js')

const router = express.Router();

router.post('/inscription', inscription);


module.exports = router;