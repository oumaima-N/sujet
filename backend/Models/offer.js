const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const offerSchema = Schema({
    title:{
        type : String,
        require: true,
    },
    description:{
        type : String,
        require: true,
    },
    type: { 
        type: String, 
        enum: ['Stage', 'Emploi']
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
    Users: [
    { type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
    },
    ],

});


module.exports = Offer = mongoose.model('offer',offerSchema)
