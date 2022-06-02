const { Model, DataTypes } = require('sequelize');

class Usuarios extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            telefone: DataTypes.STRING,

        }, { sequelize });

    }
}

module.exports = Usuarios;

