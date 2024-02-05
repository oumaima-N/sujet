 // import la bibliotheque Mongoose(facilite l'interaction avec mongodb en fournissant une couche d'abstraction)
//import { Schema, model } from 'mongoose';

const mongoose = require('mongoose')

//(on le remplace avec [import { Schema, model } from 'mongoose';])
const Schema = mongoose.Schema;


const userSchema =  new mongoose.Schema({
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
    type: { 
        type: String, 
        enum: ['etudiant', 'employee']
    },
    urlCv:{
        type : String,
        require: true,
    },
    

});


//export default User = model('User',userSchema);
module.exports = User = mongoose.model('user',userSchema)
