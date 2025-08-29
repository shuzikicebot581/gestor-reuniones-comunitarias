const express = require('express');
const router = express.Router();
// Model de Meeting
const Meeting = require('../models/Meeting');

// Rutas para gestionar reuniones
router.post('/', async (req, res) => {
    // Lógica para crear una reunión
});

router.get('/', async (req, res) => {
    // Lógica para obtener reuniones
});

router.put('/:id', async (req, res) => {
    // Lógica para editar una reunión
});

router.delete('/:id', async (req, res) => {
    // Lógica para borrar una reunión
});

module.exports = router;
