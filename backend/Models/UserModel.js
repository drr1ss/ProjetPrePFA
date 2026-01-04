const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // On utilise exactement les 'name' de ton HTML
  nom: { type: String, required: true },
  email: { type: String, required: true },
  telephone: { type: String, required: true },
  
  // name="vehicule"
  vehicule: { type: String, required: true },

  // name="livraison_lieu", "livraison_date", etc.
  livraison_lieu: { type: String, required: true },
  livraison_date: { type: String, required: true },
  livraison_heure: { type: String },

  restitution_lieu: { type: String, required: true },
  restitution_date: { type: String, required: true },
  restitution_heure: { type: String },

  // name="services" (C'est un tableau car plusieurs cases cochées)
  services: [{ type: String }],

  // name="commentaires"
  commentaires: { type: String }

}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);