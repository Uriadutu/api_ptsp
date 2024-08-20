import db from "../../config/Database.js";
import { Sequelize } from "sequelize";
import PetaPengawas from "./PetaKepengawasanModel.js";
import Pegawai from "../LapasiModels/PegawaiModels.js";

const {DataTypes} = Sequelize;

const Akademik = db.define("akademik", {
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
  nama_sekolah: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  status_akademik: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  jumlah_peserta: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  keterangan: {
    type: DataTypes.STRING,
    defaultValue : "-",
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
}, {
    freezeTableName : true,
});

PetaPengawas.hasMany(Akademik, { foreignKey: "id_pegawai" });
Akademik.belongsTo(PetaPengawas, { foreignKey: "id_pegawai" });


Pegawai.hasMany(Akademik, { foreignKey: "id_pegawai_asli" });
Akademik.belongsTo(Pegawai, { foreignKey: "id_pegawai_asli" });


export default Akademik