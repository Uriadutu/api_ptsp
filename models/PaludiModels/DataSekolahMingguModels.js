import db from "../../config/Database.js";
import { Sequelize } from "sequelize";
import Gereja from "./GerejaModel.js";
 
const {DataTypes} = Sequelize

const SekolahMinggu = db.define(
  "SekolahMinggu",
  {
    nama_gereja: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    nama_pengasuh: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    jumlah_anak: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    gerejaId : {
      type: DataTypes.INTEGER,
      allowNull: false,
      references : {
        model : Gereja,
        key : "id"
      }
    }
  },
  {
    freezeTableName: true,
  }
);

Gereja.hasOne(SekolahMinggu, {foreignKey : "gerejaId"})
SekolahMinggu.belongsTo(Gereja, {foreignKey : "gerejaId"})

export default SekolahMinggu