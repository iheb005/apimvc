const express = require('express')
const router = express.Router()
const factureController = require('../controllers/facture.controller');

// Retrieve all factures
router.get('/', factureController.findAll);

// Create a new factures
router.post('/', factureController.create);

// Retrieve a single facture with id
router.get('/:id', factureController.findById);

// Update a facture with id
router.put('/:id', factureController.update);

// Delete a facture with id
router.delete('/:id', factureController.delete);

module.exports = router