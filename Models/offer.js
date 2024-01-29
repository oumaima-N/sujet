const mongoose = require('mongoose')

const offreStageSchema = mongoose.Schema({
    titre:{
        type : String,
        require: true,
    },
    Description:{
        type : String,
        require: true,
    },
    durée:{
        type : String,
        require: true,
    },
    Date:{
        type : Date,
        require: true,
    },
    niveauEtude:{
        type : String,
        require: true,
    },
    
    demande:{
        type : String,
        require: true,
    }
});


module.exports = Offrestage = mongoose.model('offreStage',Offrestage)