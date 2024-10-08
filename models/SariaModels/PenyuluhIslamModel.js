import db from "../../config/Database.js";
import { Sequelize } from "sequelize";
const { DataTypes } = Sequelize;

const PenyuluIslam = db.define("penyuluIslam", {
  status_pegawai: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  tempat_tugas: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  jumlah_binaan: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

}, {
    freezeTableName: true
});

export default PenyuluIslam