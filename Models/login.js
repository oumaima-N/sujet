const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    
    email:{
        type : String,
        require: true,
    },
    PSW:{
        type : String,
        require: true,
    },
    
});


module.exports = User = mongoose.model('user',userSchema)