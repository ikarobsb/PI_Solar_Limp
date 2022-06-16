import React from 'react'
import { useState } from 'react'

import api from '../../services/api'
import './AreaDados.css'

import Formulario from './Formulario'
import Simulacao from './Simulacao'
export default function AreaDados() {
  const [simulacao, setSimulacao] = useState({
    id: '',
    valorDaConta: '',
    distribuidoraId: '',
    economiaAnual: '',
    energiaObrigatoria: '',
    energiaArea: '',
    quantidadeDePaineis: '',
    energiaPaineis: '',
    custoEstimado: '',
    producaoMensal: '',
    geradorCustoMinimo: '',
    geradorCustoMaximo: '',
    custoDoEquipamento: '',
    custoDaFrete: '',
    custoDaInstalacao: '',
    retornoDoInvestimento: '',
    geracaoMensal: [],
  })
  
  const [loadingSimulacao, setLoadingSimulacao] = useState(false)
  async function handleSimular(simulacaoData) {
    try {
      setLoadingSimulacao(true)
      const { data } = await api.post('/simulacoes/calcular', simulacaoData)
      setSimulacao(data)
    } catch (error) {
    } finally {
      setLoadingSimulacao(false)
    }
  }

  return (
    <div className="AreaDados">
      <div class="flex-container">
       {
        !simulacao.id ? 
         <Formulario handleSimular={handleSimular}  loadingSimulacao={loadingSimulacao} ></Formulario>
         :
         <Simulacao simulacao={simulacao}></Simulacao>
       }
      </div>
    </div>
  )
}
