// Importation des modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const axios = require('axios');

const authRoute = require('./routes/auth.js');

const app = express();
const port = 3003;

// config dotenv
dotenv.config();

// Connexion à la base de données MongoDB
const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGODB);
        console.log('Connecté à MongoDB');
    }catch(error){
        throw error;
    }
}

// Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());

app.use('/auth', authRoute);

app.listen(port, () => {
    connect();
    console.log("Serveur lancé sur le port ", port);
})