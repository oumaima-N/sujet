// entrepriseController.js

const entreprise = require("../Models/entreprise");

// exports.login = async (req, res) => {
//   const { mail, password } = req.body;
//   try {
//     const check = await entreprise.findOne({ mail, password });
//     if (check) {
//       res.json("exist");
//     } else {
//       res.json("notexist");
//     }
//   } catch (error) {
//     console.error("Error checking entreprise:", error);
//     res.status(500).json("error");
//   }
// };

exports.signup = async (req, res) => {
  const { mail, password, name, address, phone } = req.body;
  try {
    // Vérifie si l'email de l'entreprise existe déjà
    const check = await entreprise.findOne({ mail: mail });
    if (check) {
      // Si l'email existe déjà, renvoie une réponse indiquant que l'utilisateur existe
      return res.json("exist");
    } else {
      // Si l'email n'existe pas encore, crée un nouveau document dans la collection Entreprise
      await entreprise.create({
        mail: mail,
        password: password,
        name: name,
        address: address,
        phone: phone,
      });
      // Renvoie une réponse indiquant que l'inscription a réussi
      return res.json("success");
    }
  } catch (error) {
    // En cas d'erreur, renvoie une réponse indiquant une erreur
    console.error("Error creating entreprise:", error);
    return res.status(500).json("error");
  }
};
