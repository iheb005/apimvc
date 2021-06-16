const express = require('express')
const router = express.Router()
const cdeController = require('../controllers/cmdefrs.controller');

// Retrieve all commandefrs
router.get('/', cdeController.findAll);

// Create a new cmdefournisseurs
router.post('/', cdeController.create);

// Retrieve a single cmdefournisseur with id
router.get('/:id', cdeController.findById);

// Update a cmdefournisseur with id
router.put('/:id', cdeController.update);

// Delete a cmdefournisseur with id
router.delete('/:id', cdeController.delete);

module.exports = router