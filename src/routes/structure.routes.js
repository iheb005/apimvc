const express = require('express')
const router = express.Router()
const structureController = require('../controllers/structure.controller');

// Retrieve all structures
router.get('/', structureController.findAll);

// Create a new structure
router.post('/', structureController.create);

// Retrieve a single structure with id
router.get('/:id', structureController.findById);

// Update a structure with id
router.put('/:id', structureController.update);

// Delete a structure with id
router.delete('/:id', structureController.delete);

module.exports = router