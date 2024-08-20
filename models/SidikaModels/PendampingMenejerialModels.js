import { Sequelize } from "sequelize";
import db from "../../config/Database.js";
import PetaPengawas from "./PetaKepengawasanModel.js";
import Pegawai from "../LapasiModels/PegawaiModels.js";

const { DataTypes } = Sequelize;

const Menejerial = db.define("menejerial", {
  id_pegawai: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: PetaPengawas,
      key: "id_pegawai",
    },
  },
  id_pegawai_asli: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Pegawai,
      key: "id",
    },
  },
  nama_sekolah : {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  nama_kepsek : {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  status_sertifikat: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  status_pegawai: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  keterangan: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
}, {
  freezeTableName: true,
});

PetaPengawas.hasMany(Menejerial, { foreignKey: "id_pegawai" });
Menejerial.belongsTo(PetaPengawas, { foreignKey: "id_pegawai" });

Pegawai.hasMany(Menejerial, { foreignKey: "id_pegawai_asli" });
Menejerial.belongsTo(Pegawai, { foreignKey: "id_pegawai_asli" });

export default Menejerial