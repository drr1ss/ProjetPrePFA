// Attention au chemin : ../Models/ReservationModel (avec R majuscule)
const Reservation = require('../Models/ReservationModel'); 

exports.createReservation = async (req, res) => {
    try {
        console.log("📥 Nouvelle réservation :", req.body);

        const newReservation = new Reservation({
            ...req.body // On copie tout le corps de la requête
        });

        const savedReservation = await newReservation.save();

        res.status(201).json({
            message: "Réservation réussie !",
            reservation: savedReservation
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur serveur creation réservation" });
    }
};