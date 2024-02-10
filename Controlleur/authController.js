const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/login');

exports.login = async (req, res) => {
  const { mail, password } = req.body;

  try {
    const user = await User.findOne({ mail });

    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Mot de passe incorrect' });
    }

    const token = jwt.sign({ userId: user._id }, 'votre_secret_key');

    res.json({ token });
  } catch (error) {
    console.error('Erreur lors de l\'authentification :', error);
    res.status(500).send('Erreur serveur lors de l\'authentification');
  }
};
