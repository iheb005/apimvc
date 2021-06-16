const express = require('express')
const router = express.Router()
const frsController = require('../controllers/fournisseurs.controller');

// Retrieve all fournisseurs
router.get('/', frsController.findAll);

// Create a new fournisseurs
router.post('/', frsController.create);

// Retrieve a single fournisseur with id
router.get('/:id', frsController.findById);

// Update a fournisseur with id
router.put('/:id', frsController.update);

// Delete a fournisseur with id
router.delete('/:id', frsController.delete);

module.exports = router