const express = require('express');
const router = express.Router();
const userController = require('../Controllers/UserController');

// Route POST : http://localhost:5000/api/users/devis
router.post('/devis', userController.creerDevis);

module.exports = router;