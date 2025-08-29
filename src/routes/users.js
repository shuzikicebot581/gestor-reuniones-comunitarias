const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Rutas para gestionar usuarios
router.post('/register', async (req, res) => {
    // Lógica para registro de usuario
});

router.post('/login', async (req, res) => {
    // Lógica para autenticación de usuario
});

module.exports = router;
