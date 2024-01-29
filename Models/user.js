const mongoose = require('mongoose')

const etudiantSchema = mongoose.Schema({
    nom:{
        type : String,
        require: true,
    },
    prenom:{
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
    universite:{
        type : String,
        require: true,
    },
    domaineEtude:{
        type : String,
        require: true,
    },
    urlCv:{
        type : String,
        require: true,
    }
});


module.exports = Etudiant = mongoose.model('etudiant',etudiantSchema)