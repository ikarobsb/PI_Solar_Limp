const { Model, DataTypes } = require('sequelize');

class Distribuidoras extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            kw: DataTypes.DECIMAL(10, 2),


        }, { sequelize });

    }
}

module.exports = Distribuidoras;

