const path = require("path");
const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');

const app = express();

// ****************************mongodb
mongoose.connect('mongodb+srv://p7:p7@cluster0.tonbrfy.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
});

module.exports = app;