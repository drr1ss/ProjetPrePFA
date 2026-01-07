require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Import de la connexion BDD
const bddconnect = require('./bdd/db');

// --- 1. IMPORT DES ROUTES ---
// On n'importe QUE UserRoutes puisque tu as tout mis dedans
const UserRoutes = require('./Routes/UserRoute'); 

// MIDDLEWARES
app.use(express.json());
app.use(cors());

// Connexion BDD
bddconnect();

// --- 2. UTILISATION DES ROUTES ---

// Route pour les utilisateurs (login/register)
app.use('/api/v1/users', UserRoutes);

// Route pour les réservations (On utilise AUSSI UserRoutes ici)
// IMPORTANT : Si tu as mis "router.post('/', ...)" dans UserRoutes pour la réservation,
// ça marchera quand on appellera http://localhost:5000/api/reservations
app.use('/api/reservations', UserRoutes); 

// Route de test
app.get('/', (req, res) => {
    res.send('Serveur Ultimate X en ligne 🚀');
});

app.listen(port, () => {
    console.log(`✅ Serveur lancé sur le port ${port}`);
});

module.exports = app;