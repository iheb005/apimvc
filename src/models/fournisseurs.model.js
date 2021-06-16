'user strict';
var dbConn = require('./../../config/db.config');

//fournisseur object create
var Fournisseurs = function(fournisseur){
    this.ABAN8     = fournisseur.ABAN8;
    this.ABTAX     = fournisseur.ABTAX;
    this.ABALPH    = fournisseur.ABALPH;
    this.ABDC    = fournisseur.ABDC;
};
Fournisseurs.create = function (newfrs, result) {    
    dbConn.query("INSERT INTO fournisseurs set ?", newfrs, function (err, res) {
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
Fournisseurs.findById = function (ABALPH, result) {
    dbConn.query("Select * from fournisseurs where ABALPH = ? ", ABALPH, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Fournisseurs.findAll = function (result) {
    dbConn.query("Select * from fournisseurs", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('fournisseur : ', res);  
            result(null, res);
        }
    });   
};
Fournisseurs.update = function(ABAN8, fournisseur, result){
  dbConn.query("UPDATE fournisseurs SET ABTAX=?,ABALPH=?,ABDC=? WHERE ABAN8 = ?", [fournisseur.ABTAX,fournisseur.ABALPH,fournisseur.ABDC, ABAN8], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Fournisseurs.delete = function(ABAN8, result){
     dbConn.query("DELETE FROM fournisseurs WHERE ABAN8 = ?", [ABAN8], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Fournisseurs;