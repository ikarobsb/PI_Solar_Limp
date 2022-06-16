const axios = require('axios');
/**
 * A BASE_URL é basicamente, a URL padrõa da API da portalsolar, que vamos utilizar para ter as simulações
 */
const BASE_URL = 'https://portalsolar.com.br/api/v1/simulations'
/**
 * Uma instancia do axios, porém, sempre que darmos GET ou POST ou qualquer outro método, ele vai usar
 * o BASE_URL como prefixo
 * 
 * Por exemplo:
 * se dermos um apiSolar.get('power_distributors'), ele vai requisitar
 *  a URL https://portalsolar.com.br/api/v1/simulations/power_distributors
 */
const apiSolar = axios.create({
  baseURL: BASE_URL
})
/**
 * 
 * @param {import('./types/Simulations').SimulationRaw} simulacaoRaw 
 */
function traduzDadosDeSimulacao(simulacaoRaw) {
  return {
    id: simulacaoRaw.id,
    valorDaConta: simulacaoRaw.light_bill,
    distribuidoraId: simulacaoRaw.power_distributor_id,
    economiaAnual: simulacaoRaw.annual_savings,
    energiaObrigatoria: simulacaoRaw.required_power,
    energiaArea: simulacaoRaw.area_power,
    quantidadeDePaineis: simulacaoRaw.panels_amount,
    energiaPaineis: simulacaoRaw.panels_power,
    custoEstimado: simulacaoRaw.estimated_cost,
    producaoMensal: simulacaoRaw.monthly_production,
    geradorCustoMinimo: simulacaoRaw.estimated_generator_cost_min,
    geradorCustoMaximo: simulacaoRaw.estimated_generator_cost_max,
    custoDoEquipamento: simulacaoRaw.equipment_cost,
    custoDaFrete: simulacaoRaw.freight_cost,
    custoDaInstalacao: simulacaoRaw.installation_cost,
    retornoDoInvestimento: simulacaoRaw.payback,
    geracaoMensal: simulacaoRaw.monthly,
  }
}

module.exports = {
   async getPowerDistributors(req, res){
    const {cep} = req.query;
    if(!cep) {
        return res.status(400).json({
            message: 'CEP não informado'
        })
    }

    if(cep.length < 8) {
      return res.status(400).json({
          message: 'CEP inválido!'
      })
  }
    // fazemos um request usando o axios
    try {
      const powerDistributorsResult = await apiSolar.get(`/power_distributors?postalcode=${cep}`)
    // retornamos o resultado .data, porque o axios retorna um objeto enorme, mas o que precisamos é o .data
    return res.status(200).json(powerDistributorsResult.data)
    } catch (error) {
      return res.status(500).json({message: error.message})
    }
  },
  async makeSimulation(req, res) {
    const {
      cep, 
      distribuidoraId,
      valorDaConta
    } = req.body

    if(!cep) {
        return res.status(400).json({
            message: 'CEP não informado'
        })
    }

    if(!distribuidoraId) {
      return res.status(400).json({
          message: 'Distribuidora não informada'
      })
    }

    if(!valorDaConta) {
      return res.status(400).json({
          message: 'Valor da conta não informado'
      })
    }

    const simulation = {
      postalcode: cep,
      light_bill: valorDaConta,
      power_distributor_id: distribuidoraId
    }

    try{
      const simulationResult = await apiSolar.post('/calculate', {simulation})
      return res.status(200).json(traduzDadosDeSimulacao(simulationResult.data))
    }
    catch(error) {
      return res.status(500).json({message: error.message})
    }
  }
}