const mongoose = require('mongoose')

const entrepriseSchema = mongoose.Schema({
    name:{
        type : String,
        require: true,
    },
    adress:{
        type : String,
        require: true,
    },
    mail:{
        type : String,
        require: true,
    },
    phone:{
        type : Number,
        require: true,
    },
    urlWebSite:{
        type : String,
        require: true,
    },
    Sectoractivity:{
        type : String,
        require: true,
    },
    
});


module.exports = Entreprise = mongoose.model('entreprise',entrepriseSchema)
