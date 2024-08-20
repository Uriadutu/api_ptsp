import db from "../../config/Database.js";
import { Sequelize } from "sequelize";

const {DataTypes} = Sequelize;

const Jabatan = db.define(
  "Jabatan",
  {
    kode_jabatan: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    nama_jabatan: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    freezeTableName: true,
  }
);

export default Jabatan