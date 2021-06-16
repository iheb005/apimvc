const config = require("../config/db.config.js");
const sequelize = require("sequelize");
// with sequelize models there is used no need to write CRUD functions 
const sequel= new sequelize(
    config.DB,
    config.user,
    config.password,
    {
        host: config.host,
        dialect: config.dialect
    }
);

const db= {};
db.sequelize = sequelize;
db.sequel = sequel;

db.user= require("../models/utilisateur.model.js")(sequel, sequelize);
db.role= require("../models/role.model.js")(sequel, sequelize);

db.role.belongsToMany(db.utilisateur, {
    through: "user_roles",
    foreignkey: "roleId",
    otherkey: "userId"
});

db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignkey: "userId",
    otherkey: "roleId"
});

db.roles= ["user", "admin", "moderator"];
module.exports = db;

