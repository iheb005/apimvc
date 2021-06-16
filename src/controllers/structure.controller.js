'use strict';

const Structure = require('../models/structure.model');

exports.findAll = function(req, res) {
  Structure.findAll(function(err, structure) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', structure);
    res.send(structure);
  });
};


exports.create = function(req, res) {
    const newstructure = new Structure(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Structure.create(newstructure, function(err, structure) {
            if (err)
            res.send(err);
            res.json({error:false,message:"structure added successfully!",data:structure});
        });
    }
};

exports.findById = function(req, res) {
    Structure.findById(req.params.id, function(err, structure) {
        if (err)
        res.send(err);
        res.json(structure);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Structure.update(req.params.id, new Structure(req.body), function(err, structure) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'structure successfully updated' });
        });
    }
  
};

exports.delete = function(req, res) {
  Structure.delete( req.params.id, function(err, structure) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'structure successfully deleted' });
  });
};