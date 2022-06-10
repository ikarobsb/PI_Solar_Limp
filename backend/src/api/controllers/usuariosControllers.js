const Usuarios = require('../models/usuariosModels.js');

module.exports = {
    
    async index(req, res){
        const usuarios = await Usuarios.findAll();
        return res.json(usuarios);
    },

    async store(req, res) {
       const usuarios = await Usuarios.create(req.body);
       return res.json({message: "Registro criado com sucesso!"})
    },

    async update(req, res) {
        const { id } = req.params;
        const { nome } = req.body;
        const { email } = req.body;
        const { telefone } = req.body;

        await Usuarios.update({
            nome,
            email,
            telefone
        }, {
            where: {id: id}
        })
        return res.json({message: "Registro atualizado com sucesso!"})
    },

    async delete(req, res) {
        const { id } = req.params;
        await Usuarios.destroy({
            where: {id: id}
        });
        return res.status(200).send({
            status: 1,
            message: "Categoria deletada!"
        });
    },

    async indexId(req, res) {
        const { id } = req.params;
        const usuarios = await Usuarios.findByPk(codigo_id);

        return res.json(usuarios);
    }

}


