'use strict';

const Factures = require('../models/facture.model');

exports.findAll = function(req, res) {
    Factures.findAll(function(err, facture) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', facture);
    res.send(facture);
  });
};


exports.create = function(req, res) {
    const newbill = new Factures(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Factures.create(newbill, function(err, facture) {
            if (err)
            res.send(err);
            res.json({error:false,message:"bill added successfully!",data:facture});
        });
    }
};


exports.findById = function(req, res) {
    Factures.findById(req.params.id, function(err, user) {
        if (err)
        res.send(err);
        res.json(user);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Factures.update(req.params.id, new Factures(req.body), function(err, facture) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'bill successfully updated' });
        });
    }
  
};


exports.delete = function(req, res) {
    Factures.delete( req.params.id, function(err, user) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'bill successfully deleted' });
  });
};