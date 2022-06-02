const Distribuidoras = require('../models/distribuidorasModels.js');

module.exports = {
    
    async index(req, res){
        const distribuidoras = await Distribuidoras.findAll();
        return res.json(distribuidoras);
    },

    async store(req, res) {
       const distribuidoras = await Distribuidoras.create(req.body);
       return res.json({message: "Registro criado com sucesso!"})
    },

    async update(req, res) {
        const { id } = req.params;
        const { nome } = req.body;
        const { kw } = req.body;
        

        await Distribuidoras.update({
            nome,
            kw
        }, {
            where: {id: id}
        })
        return res.json({message: "Registro atualizado com sucesso!"})
    },

    async delete(req, res) {
        const { id } = req.params;
        await Distribuidoras.destroy({
            where: {id: id}
        });
        return res.status(200).send({
            status: 1,
            message: "Categoria deletada!"
        });
    },

    async indexId(req, res) {
        const { id } = req.params;
        const distribuidoras = await Distribuidoras.findByPk(codigo_id);

        return res.json(distribuidoras);
    }

}


