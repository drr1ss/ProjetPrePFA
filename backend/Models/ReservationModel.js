const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    vehicule: { type: String, required: true },
    prixJournalier: { type: Number, required: true },
    dateDebut: { type: Date, required: true },
    dateFin: { type: Date, required: true },
    jours: { type: Number, required: true },
    options: [String], 
    total: { type: Number, required: true },
    
    // Champs optionnels pour le client
    nomClient: { type: String, default: "Client Invité" },
    emailClient: { type: String },
    
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Reservation', reservationSchema);