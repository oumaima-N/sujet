const mongoose = require('mongoose')

const entrepriseSchema = mongoose.Schema({
    nom:{
        type : String,
        require: true,
    },
    adress:{
        type : String,
        require: true,
    },
    email:{
        type : String,
        require: true,
    },
    telephone:{
        type : Number,
        require: true,
    },
    urlSiteWeb:{
        type : String,
        require: true,
    },
    secteurActivité:{
        type : String,
        require: true,
    },
    
});


module.exports = Entreprise = mongoose.model('entreprise',entrepriseSchema)