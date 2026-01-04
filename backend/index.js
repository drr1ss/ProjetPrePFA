require('dotenv').config();
const express = require('express');
const cors = require('cors'); // IMPORT DE CORS
const app = express();
const port = 5000; // CHANGEMENT DE PORT (pour éviter conflit avec React)



// Import de la connexion BDD
// Vérifie que ton fichier s'appelle bien db.js dans le dossier bdd
const bddconnect = require('./bdd/db'); // ou './bdd/connect' selon ton nom de fichier

// Import des routes
// CORRECTION DU CHEMIN (Majuscule 'R' et nom exact du fichier)
const UserRoutes = require('./Routes/UserRoute'); 

// MIDDLEWARES
app.use(express.json()); // Pour lire le JSON
app.use(cors()); // Pour autoriser ton site React à parler au Backend

// Connexion BDD
bddconnect();

// Utilisation des routes
// L'URL finale sera : http://localhost:5000/api/v1/users/devis
app.use('/api/v1/users', UserRoutes);

app.listen(port, () => {
    console.log(`✅ Serveur lancé sur le port ${port}`);
});

module.exports = app;