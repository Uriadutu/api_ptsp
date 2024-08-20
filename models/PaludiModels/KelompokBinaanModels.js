import db from "../../config/Database.js";
import { Sequelize } from "sequelize";
import Penyulu from "./PenyuluModels.js";

const { DataTypes } = Sequelize;

const KelompokBinaan = db.define(
  "KelompokBinaan",
  {
    id_penyulu: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Penyulu,
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

Penyulu.hasMany(KelompokBinaan, { foreignKey: "id_penyulu" });
KelompokBinaan.belongsTo(Penyulu, { foreignKey: "id_penyulu" });

export default KelompokBinaan;
