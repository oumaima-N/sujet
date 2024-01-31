import { Schema, model } from 'mongoose';

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
    
    demande:{
        type : String,
        require: true,
    },
    Users: [
    { type: Schema.Types.ObjectId, 
        ref: 'User',
    },
    ],

});


export default Offre = model('offre',offerSchema);
