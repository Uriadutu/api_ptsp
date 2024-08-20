import db from "../../config/Database.js";
import { Sequelize } from "sequelize";
import Pegawai from "../LapasiModels/PegawaiModels.js";

const {DataTypes} = Sequelize

const Penghulu = db.define("penghulu", 
    {
        id_pegawai : {
            type : DataTypes.INTEGER,
            allowNull : false,
            references : {
                model : Pegawai,
                key : "id"
            }
        },
    }, {
        freezeTableName : true
    }

)
Pegawai.hasMany(Penghulu, { foreignKey: "id_pegawai" })
Penghulu.belongsTo(Pegawai, { foreignKey: "id_pegawai" })

export default Penghulu