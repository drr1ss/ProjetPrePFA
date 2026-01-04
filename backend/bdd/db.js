const mongoose = require('mongoose');

const bddconnect = async () => {
    try {
        console.log("Tentative de connexion à la base de données...");

        // SÉCURITÉ : On utilise la variable du fichier .env
        // Assure-toi que ton fichier .env contient bien la ligne MONGO_URI
        const dbLink = process.env.MONGO_URI; 

        if (!dbLink) {
            throw new Error("Le lien MONGO_URI est introuvable dans le fichier .env !");
        }

        await mongoose.connect(dbLink);
        
        console.log("✅ Connexion à la base de données réussie !");

    } catch (error) {
        console.error("❌ Erreur de connexion :", error.message);
        process.exit(1);
    }
}

module.exports = bddconnect;