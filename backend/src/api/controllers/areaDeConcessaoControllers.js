const AreaConcessao = require('../models/areaDeConcessaoModels.js');

module.exports = {
    
    async index(req, res){
        const areaconcessao = await AreaConcessao.findAll();
        return res.json(areaconcessao);
    },

    async store(req, res) {
       const areaconcessao = await AreaConcessao.create(req.body);
       return res.json({message: "Registro criado com sucesso!"})
    },

    async update(req, res) {
        const { id } = req.params;
        const { estado } = req.body;
        const { cidade } = req.body;
        const { distribuidora_id } = req.body;        

        await AreaConcessao.update({
            estado,
            cidade,
            distribuidora_id
        }, {
            where: {id: id}
        })
        return res.json({message: "Registro atualizado com sucesso!"})
    },

    async delete(req, res) {
        const { id } = req.params;
        await AreaConcessao.destroy({
            where: {id: id}
        });
        return res.status(200).send({
            status: 1,
            message: "Categoria deletada!"
        });
    },

    async indexId(req, res) {
        const { id } = req.params;
        const areaconcessao = await AreaConcessao.findByPk(codigo_id);

        return res.json(areaconcessao);
    }

}


