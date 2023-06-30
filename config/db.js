const sequelize = require("sequelize");

const db = new sequelize("galang", "root", "", {
    dialect: "mysql"
});

db.sync({});

module.exports = db;