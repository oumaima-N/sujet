const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./Routes/authRoutes');

const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);

mongoose.connect('mongodb://localhost:27017/plateforme', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connecté à MongoDB');
  app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
  });
})
.catch(error => {
  console.error('Erreur de connexion à MongoDB :', error);
});
