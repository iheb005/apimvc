'use strict';

const Cmdfrs = require('../models/cmdefrs.model');

exports.findAll = function(req, res) {
    Cmdfrs.findAll(function(err, cmdfrs) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', cmdfrs);
    res.send(cmdfrs);
  });
};

exports.create = function(req, res) {
    const newcde = new Cmdfrs(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Cmdfrs.create(newcde, function(err, cmdfrs) {
            if (err)
            res.send(err);
            res.json({error:false,message:"cmdefrs added successfully!",data:cmdfrs});
        });
    }
};


exports.findById = function(req, res) {
    Cmdfrs.findById(req.params.id, function(err, cmdfrs) {
        if (err)
        res.send(err);
        res.json(cmdfrs);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Cmdfrs.update(req.params.id, new Cmdfrs(req.body), function(err, cmdfrs) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'cmdefrs successfully updated' });
        });
    }
};

exports.delete = function(req, res) {
    Cmdfrs.delete( req.params.id, function(err, cmdfrs) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'cmdefrs successfully deleted' });
  });
};