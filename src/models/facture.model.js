'user strict';
var dbConn = require('./../../config/db.config');

//Employee object create
var Factures = function(facture){
    this.datefacture     = facture.datefacture;
    this.adresse      = facture.adresse;
    this.prix          = facture.prix;
 
};
Factures.create = function (newbill, result) {    
    dbConn.query("INSERT INTO factures set ?", newbill, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};
Factures.findById = function (id, result) {
    dbConn.query("Select * from factures where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Factures.findAll = function (result) {
    dbConn.query("Select * from factures", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('facture : ', res);  
            result(null, res);
        }
    });   
};
Factures.update = function(id, factures, result){
  dbConn.query("UPDATE factures SET datefacture=?,adresse=?,prix=? WHERE id = ?", [factures.datefacture,factures.adresse,factures.prix, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Factures.delete = function(id, result){
     dbConn.query("DELETE FROM factures WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Factures;