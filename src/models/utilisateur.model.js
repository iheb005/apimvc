module.exports=(sequelize, sequelize) =>{
    const utilisteur = sequelize.define("utilisateurs", {
        prenom:{
            type: sequelize.STRING
        },
        email:{
            type:sequelize.STRING
        },
        mdp: {
            type:sequelize.STRING
        }
    });
    return utilisteur;
   
};