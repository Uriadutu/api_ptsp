import db from "../../config/Database.js";
import { Sequelize } from "sequelize";
// import Sekolah from "./SekolahModels.js";
import SekolahKristen from "./SekolahKristenModel.js"

const { DataTypes } = Sequelize;

const DokumenSekolahKristen = db.define(
  "DokumenSekolahKristen",
  {
    id_sekolah: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: SekolahKristen,
        key: "id",
      },
    },
    sk_izin_file: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    sk_izin_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    no_reg_file: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    no_reg_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    akreditasi_file: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    akreditasi_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    nss_file: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    nss_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    serti_tanah_file: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    serti_tanah_url: {
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

SekolahKristen.hasMany(DokumenSekolahKristen, { foreignKey: "id_sekolah" });
DokumenSekolahKristen.belongsTo(SekolahKristen, { foreignKey: "id_sekolah" });

export default DokumenSekolahKristen;
