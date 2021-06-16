'user strict';
var dbConn = require('./../../config/db.config');

//Employee object create
var User = function(user){
    this.firstname     = user.firstname;
    this.lastname      = user.lastname;
    this.email          = user.email;
    this.statut          = user.statut;
 
};
User.create = function (newuser, result) {    
    dbConn.query("INSERT INTO user set ?", newuser, function (err, res) {
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
User.findById = function (id, result) {
    dbConn.query("Select * from user where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
User.findAll = function (result) {
    dbConn.query("Select * from user", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('user : ', res);  
            result(null, res);
        }
    });   
};
User.update = function(id, user, result){
  dbConn.query("UPDATE user SET firstname=?,lastname=?,email=?,statut=? WHERE id = ?", [user.firstname,user.lastname,user.email,user.statut, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
User.delete = function(id, result){
     dbConn.query("DELETE FROM user WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= User;