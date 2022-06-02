const { Model, DataTypes } = require('sequelize');

class AreaConcessao extends Model {
    static init(sequelize) {
        super.init({
            estado: DataTypes.STRING(40),
            cidade: DataTypes.STRING(100),
            distribuidora_id: DataTypes.INTEGER,

        }, { sequelize });

    }
}

module.exports = AreaConcessao;

