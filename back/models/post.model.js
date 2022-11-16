const mongoose = require('mongoose');


const sauceSchema = mongoose.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    categorie: { type: String, required: true }

});

module.exports = mongoose.model("Sauce", sauceSchema);


