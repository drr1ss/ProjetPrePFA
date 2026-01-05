const mongoose = require('mongoose');

const bddconnect = async () => {
    try {
        // 1. VÉRIFICATION : Est-ce qu'on est déjà connecté ?
        // 0 = déconnecté, 1 = connecté, 2 = en cours de connexion
        if (mongoose.connection.readyState >= 1) {
            // console.log("♻️ Utilisation de la connexion existante.");
            return;
        }

        console.log("Tentative de connexion à la base de données...");

        const dbLink = process.env.MONGO_URI; 

        if (!dbLink) {
            throw new Error("Le lien MONGO_URI est introuvable dans le fichier .env !");
        }

        // 2. CONNEXION (Si pas déjà connecté)
        await mongoose.connect(dbLink);
        
        console.log("✅ Nouvelle connexion à la BDD réussie !");

    } catch (error) {
        console.error("❌ Erreur de connexion :", error.message);
        // Ne jamais faire process.exit(1) sur Vercel, ça tue le serveur pour les autres utilisateurs !
    }
}

module.exports = bddconnect;