'user strict';
var dbConn = require('./../../config/db.config');

//Cmde fournisseur object creation
var Cmdfrs = function(cmdfrs){
    this.PHAN8     = cmdfrs.PHAN8;
    this.PHDOCO     = cmdfrs.PHDOCO;
    this.PHOTOT    = cmdfrs.PHOTOT;    
};
Cmdfrs.create = function (newcde, result) {    
    dbConn.query("INSERT INTO cmdfrs set ?", newcde, function (err, res) {
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
Cmdfrs.findById = function (PHAN8, result) {
    dbConn.query("Select * from cmdfrs where PHAN8 = ? ", PHAN8, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Cmdfrs.findAll = function (result) {
    dbConn.query("Select * from cmdfrs", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('cmdefrs : ', res);  
            result(null, res);
        }
    });   
};
Cmdfrs.update = function(PHAN8, cmdefrs, result){
  dbConn.query("UPDATE cmdfrs SET PHDOCO=?,PHOTOT=? WHERE PHAN8 = ?", [cmdefrs.PHDOCO,cmdefrs.PHOTOT, PHAN8], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Cmdfrs.delete = function(PHAN8, result){
     dbConn.query("DELETE FROM cmdfrs WHERE PHAN8 = ?", [PHAN8], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Cmdfrs;