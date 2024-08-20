import db from "../../config/Database.js";
import { Sequelize } from "sequelize";
import PenyuluIslam from "./PenyuluhIslamModel.js";

const { DataTypes } = Sequelize;

const KelompokBinaanIslam = db.define(
  "KelompokBinaanIslam",
  {
    id_penyuluislam: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: PenyuluIslam,
        key: "id",
      },
    },
    nama_kelompok: {
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

PenyuluIslam.hasMany(KelompokBinaanIslam, { foreignKey: "id_penyuluislam" });
KelompokBinaanIslam.belongsTo(PenyuluIslam, { foreignKey: "id_penyuluislam" });

export default KelompokBinaanIslam;
