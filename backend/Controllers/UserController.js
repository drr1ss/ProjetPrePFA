const User = require('../Models/UserModel');

exports.creerDevis = async (req, res) => {
  try {
    console.log("Données reçues :", req.body);

    // C'est magique : comme les noms sont identiques, on passe tout direct !
    const nouveauDevis = new User(req.body);

    await nouveauDevis.save();

    res.status(201).json({ message: "Devis envoyé avec succès !" });

  } catch (error) {
    console.error("Erreur save :", error);
    res.status(500).json({ message: "Erreur serveur", error });
  }
};