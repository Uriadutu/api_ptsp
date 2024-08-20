import db from "../../config/Database.js";
import { Sequelize } from "sequelize";
import Kecamatan from "../SahuModels/KecamatanModels.js";

const { DataTypes } = Sequelize;

const Tpq = db.define(
  "tpq",
  {
    id_kecamatan: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Kecamatan,
        key: "id",
      },
    },
    nama_desa: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    jumlah_santri: {
      type: DataTypes.INTEGER, // Ubah menjadi INTEGER jika jumlahnya angka
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    jumlah_santriwati: {
      type: DataTypes.INTEGER, // Ubah menjadi INTEGER jika jumlahnya angka
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    jumlah_ustad: {
      type: DataTypes.INTEGER, // Ubah menjadi INTEGER jika jumlahnya angka
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    jumlah_ustadzah: {
      type: DataTypes.INTEGER, // Ubah menjadi INTEGER jika jumlahnya angka
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

Kecamatan.hasMany(Tpq, {
  foreignKey: "id_kecamatan",
});
Tpq.belongsTo(Kecamatan, {
  foreignKey: "id_kecamatan",
});

export default Tpq;
