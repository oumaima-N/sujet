// entrepriseController.js

const entreprise = require("../../Models/conditat");

exports.login = async (req, res) => {
  const { mail, password } = req.body;
  try {
    const check = await conditat.findOne({ mail, password });
    if (check) {
      res.json({ message: 'User successfully signed up', redirectTo: '/home' });
    } else {
      res.json("notexist");
    }
  } catch (error) {
    console.error("Error checking conditat:", error);
    res.status(500).json("error");
  }
};

exports.signup = async (req, res) => {
  const { mail, password, name, address, phone } = req.body;

  const data = {
        mail: mail,
        password: password,
        name: name,
        address: address,
        phone: phone,
  }
  try {
    // Vérifie si l'email de l'entreprise existe déjà
    const check = await conditat.findOne({ mail: mail });
    if (check) {
      // Si l'email existe déjà, renvoie une réponse indiquant que l'utilisateur existe
      return res.json("exist");
    } else {
      // Si l'email n'existe pas encore, crée un nouveau document dans la collection Entreprise
      await conditat.create(data);
      // Renvoie une réponse indiquant que l'inscription a réussi
      res.json({ message: 'User successfully signed up', redirectTo: '/home' });
    }
  } catch (error) {
    // En cas d'erreur, renvoie une réponse indiquant une erreur
    console.error("Error creating conditat:", error);
    return res.status(500).json("error");
  }
};
