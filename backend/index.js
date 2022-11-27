// Importation des modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const axios = require('axios');

const app = express();
const port = 3003;

// config dotenv
dotenv.config();

// Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.listen(port, () => {
    console.log("Serveur lancé sur le port ", port);
})