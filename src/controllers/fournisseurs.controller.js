'use strict';

const Fournisseurs = require('../models/fournisseurs.model');

exports.findAll = function(req, res) {
    Fournisseurs.findAll(function(err, fournisseur) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', fournisseur);
    res.send(fournisseur);
  });
};


exports.create = function(req, res) {
    const newfrs = new Fournisseurs(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Fournisseurs.create(newfrs, function(err, fournisseur) {
            if (err)
            res.send(err);
            res.json({error:false,message:"fournisseur added successfully!",data:fournisseur});
        });
    }
};


exports.findById = function(req, res) {
    Fournisseurs.findById(req.params.id, function(err, fournisseur) {
        if (err)
        res.send(err);
        res.json(fournisseur);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Fournisseurs.update(req.params.id, new Fournisseurs(req.body), function(err, fournisseur) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'fournisseur successfully updated' });
        });
    }
};

exports.delete = function(req, res) {
    Fournisseurs.delete( req.params.id, function(err, fournisseur) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'fournisseur successfully deleted' });
  });
};