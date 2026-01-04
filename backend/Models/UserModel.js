const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // --- Informations Personnelles ---
  nomComplet: { type: String, required: true },
  email: { type: String, required: true },
  telephone: { type: String, required: true },

  // --- Choix du Véhicule (Liste exacte de tes images) ---
  typeVehicule: { 
    type: String, 
    enum: [
      'Prestige', 'SUV & 4x4', 'Service', 'Tourisme', 
      'Normal', 'Moto', 'Compact', 'Sport', 'Citadine'
    ],
    required: true 
  },

  // --- Livraison ---
  livraison: {
    lieu: { type: String, required: true },
    date: { type: String, required: true },
    heure: { type: String, required: true }
  },

  // --- Restitution ---
  restitution: {
    lieu: { type: String, required: true },
    date: { type: String, required: true },
    heure: { type: String, required: true }
  },

  // --- Services Supplémentaires (Checkbox) ---
  services: [{
    type: String 
    // Ex: "WiFi embarqué", "Siège enfant", "Assurance premium"
  }],

  // --- Commentaires ---
  message: { type: String }

}, { timestamps: true }); // Ajoute la date de création automatiquement

module.exports = mongoose.model('User', userSchema);