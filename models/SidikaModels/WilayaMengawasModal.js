import db from "../../config/Database.js";
import { Sequelize } from "sequelize";
import PetaPengawas from "./PetaKepengawasanModel.js";

const {DataTypes} = Sequelize;
const WilayaMengawas = db.define('wilayamengawas', {
    id_pengawas: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references : {
            model : PetaPengawas,
            key : "id"
        }
    },
    nama_wilayah : {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    }
}, {
    freezeTableName : true
})

PetaPengawas.hasMany(WilayaMengawas, { foreignKey: "id_pengawas" });
WilayaMengawas.belongsTo(PetaPengawas, { foreignKey: "id_pengawas" });

export default WilayaMengawas
