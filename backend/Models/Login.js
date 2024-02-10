const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    
    mail: { type: String, required: true },
  password: { type: String, required: true }
    
});


module.exports = User = mongoose.model('user',userSchema)
