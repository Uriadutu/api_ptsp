import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Pegawai from "./LapasiModels/PegawaiModels.js";

const { DataTypes } = Sequelize;

const Pengaduan = db.define(
  "pengaduan",
  {
    id_pegawai: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Pegawai,
        key: "id",
      },
    },
    judul_laporan: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    tgl_kejadian: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lokasi_kejadian: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    
    kategori_laporan: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    
    deskripsiPengaduan: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    sifat_laporan : {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    }
  },
  {
    freezeTableName: true,
  }
);

Pegawai.hasMany(Pengaduan, { foreignKey: "id_pegawai" });
Pengaduan.belongsTo(Pegawai, { foreignKey: "id_pegawai" });

export default Pengaduan;
