const mongoose = require('mongoose')

const offreStageSchema = mongoose.Schema({
    title:{
        type : String,
        require: true,
    },
    description:{
        type : String,
        require: true,
    },
    duration:{
        type : String,
        require: true,
    },
    Date:{
        type : Date,
        require: true,
    },
    profession:{
        type : String,
        require: true,
    },
    
    demande:{
        type : String,
        require: true,
    }
});


module.exports = Offrestage = mongoose.model('offreStage',Offrestage)
