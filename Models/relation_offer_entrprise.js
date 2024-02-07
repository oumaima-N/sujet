const mongoose = require(mongoose);
const entreprise = require('./Company');
const campany = require('./Company');
const Offer = require('./offer');

mongoose.connect('mongodb://127.0.0.1:27017');

//creer une instance de User
//const User = new User({name , lastename , phone , urlcv});

//creer une instance de Offer
//const Offer= new Offer({});

// Ajouter les références dans les tableaux correspondants
campany.offers.push(Offer._id);
Offer.campany.push(entreprise._id);

// save entreprise in BD
User.save((err) => {
    if (err) throw err;

    // save offer in BD
    offre.save((err) => {
        if (err) throw err;

        console.log('offer et campany créés avec la relation.');
        mongoose.connection.close();
    });
});

