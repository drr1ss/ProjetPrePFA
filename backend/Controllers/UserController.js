const User = require('../Models/UserModel'); // On importe le modèle ci-dessus

// Fonction pour enregistrer une demande de devis
exports.creerDevis = async (req, res) => {
  try {
    // On affiche les données reçues dans la console (pour vérifier)
    console.log("Nouvelle demande reçue :", req.body);

    // Création du nouveau client/devis
    const nouveauDevis = new User({
      nomComplet: req.body.nomComplet,
      email: req.body.email,
      telephone: req.body.telephone,
      typeVehicule: req.body.typeVehicule,
      livraison: {
        lieu: req.body.lieuLivraison,
        date: req.body.dateLivraison,
        heure: req.body.heureLivraison
      },
      restitution: {
        lieu: req.body.lieuRestitution,
        date: req.body.dateRestitution,
        heure: req.body.heureRestitution
      },
      services: req.body.services,
      message: req.body.commentaire
    });

    // Sauvegarde dans MongoDB
    await nouveauDevis.save();

    res.status(201).json({ message: "Devis envoyé avec succès !", devis: nouveauDevis });

  } catch (error) {
    console.error("Erreur save :", error);
    res.status(500).json({ message: "Erreur lors de l'envoi", error });
  }
};