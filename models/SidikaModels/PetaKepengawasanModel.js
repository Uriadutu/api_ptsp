import db from "../../config/Database.js";
import { Sequelize } from "sequelize";
import Pegawai from "../LapasiModels/PegawaiModels.js"

const {DataTypes} = Sequelize;

const PetaPengawas = db.define("petapengawas", {
    id_pegawai: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model : Pegawai,
            key : "id"
        }
    },
    jenis_pengawas : {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue : "-",
        validate: {
            notEmpty: true,
        }
    },
}, {
    freezeTableName : true,
})

Pegawai.hasMany(PetaPengawas)
PetaPengawas.belongsTo(Pegawai, {foreignKey : "id_pegawai"})

export default PetaPengawas