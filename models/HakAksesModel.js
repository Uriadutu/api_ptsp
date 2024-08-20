import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Pegawai from "./LapasiModels/PegawaiModels.js";

const { DataTypes } = Sequelize;

const HakAkses = db.define(
  "HakAkses",
  {
    id_pegawai :{
      type: DataTypes.INTEGER,
    },
    lapasi: {
      type: DataTypes.BOOLEAN,
    },
    pantai_disa: {
      type: DataTypes.BOOLEAN,
    },
    aksesahu: {
      type: DataTypes.BOOLEAN,
    },
    saria: {
      type: DataTypes.BOOLEAN,
    },
    paludi: {
      type: DataTypes.BOOLEAN,
    },
    sahu: {
      type: DataTypes.BOOLEAN,
    },
    sidika: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    freezeTableName: true,
  }
);

Pegawai.hasMany(HakAkses)
HakAkses.belongsTo(Pegawai, {foreignKey : "id_pegawai"});

export default HakAkses
