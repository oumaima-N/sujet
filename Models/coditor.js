const mongoose = require(mongoose)

const coditorSchema =new mongoose.schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: "user"},
    offre: { type: mongoose.Schema.Type.ObjectedId, ref: 'offer'},

});

const conditor = mongoose.model('conditor',coditorSchema );
module.exports = conditor;
