 // import la bibliotheque Mongoose(facilite l'interaction avec mongodb en fournissant une couche d'abstraction)
const mongoose = require('mongoose')

const etudiantSchema = mongoose.Schema({
    name:{
        type : String,
        require: true,
    },
    lastname:{
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
    professionalDomain:{
        type : String,
        require: true,
    },
    urlCv:{
        type : String,
        require: true,
    }
});


module.exports = Etudiant = mongoose.model('etudiant',etudiantSchema)
