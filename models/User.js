const { Sequelize } = require("sequelize");
const db = require("../config/db");

const User = db.define(
    "user",
    {
       // id: {type: Sequelize.INTEGER},
        kategori: {type: Sequelize.STRING},
        judul: {type: Sequelize.STRING},
        konten: {type: Sequelize.STRING},
        image: { type: Sequelize.STRING },
        tanggal: { type: Sequelize.DATE },
    },
    {
        freezeTableName: true
    }
);

module.exports = User;