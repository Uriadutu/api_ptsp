import db from "../../config/Database.js";
import { Sequelize } from "sequelize";

const { DataTypes } = Sequelize;

const PeriodeHaji = db.define("PeriodeHaji", {
  tanggal: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  jumlah_jamaah: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
}, {
    freezeTableName : true
});

export default PeriodeHaji