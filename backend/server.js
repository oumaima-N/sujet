// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const entrepriseRoutes = require('./routes/entreprise/entrepriseRoutes');
const conditatRoutes = require('./routes/conditat/conditatRoutes')

const app = express();
app.use(express.json());
app.use(cors({
  //  origin: 'http://localhost:3001',
  //  methods: 'GET,POST',
  //  allowedHeaders: ['Content-Type', 'Authorization'],
}));


app.use('/', entrepriseRoutes);
app.use('/',conditatRoutes)
mongoose.connect('mongodb://localhost:27017/plateforme', {
   useNewUrlParser: true,
   useUnifiedTopology: true
}).then(() => {
   console.log('Connecté à MongoDB');
   app.listen(3000, () => {
      console.log('Serveur démarré sur le port 3000');
   });
}).catch(error => {
   console.error('Erreur de connexion à MongoDB :', error);
});
