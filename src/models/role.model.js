module.exports = (sequelize,sequelize) =>{
    const role = sequelize.define("roles",{
        id: {
            type: sequelize.INTEGER,
            primarykey: true
        },
        nom:{
            type:sequelize.STRING
        }
    });
    return role;
};