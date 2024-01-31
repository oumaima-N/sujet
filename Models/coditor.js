const mongoose = require(mongoose);
const User = require('./user');
const Offer = require('./offer');

mongoose.connect('mongodb://127.0.0.1:27017');

//creer une instance de User
//const User = new User({name , lastename , phone , urlcv});

//creer une instance de Offer
//const Offer= new Offer({});

// Ajouter les références dans les tableaux correspondants
User.offers.push(Offer._id);
Offer.users.push(User._id);

// save user in BD
User.save((err) => {
    if (err) throw err;

    // save offer in BD
    offreStage.save((err) => {
        if (err) throw err;

        console.log('offer et user créés avec la relation.');
        mongoose.connection.close();
    });
});

