'user strict';
var dbConn = require('./../../config/db.config');

//Structure object create
var Structure = function(structure){
    this.nom     = structure.nom;
    this.mail      = structure.mail;
};
Structure.create = function (newstruct, result) {    
    dbConn.query("INSERT INTO structure set ?", newstruct, function (err, res) {
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
Structure.findById = function (id, result) {
    dbConn.query("Select * from structure where id = ? ", id, function (err, res) {             
        if(err) {er
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Structure.findAll = function (result) {
    dbConn.query("Select * from structure", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('structure : ', res);  
            result(null, res);
        }
    });   
};
Structure.update = function(id, structure, result){
  dbConn.query("UPDATE structure SET nom=?,mail=? WHERE id = ?", [structure.nom,structure.mail, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Structure.delete = function(id, result){
     dbConn.query("DELETE FROM structure WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Structure;