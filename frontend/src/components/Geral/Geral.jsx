import React from 'react'
import './Geral.css'
import Cabecalho from '../Cabecalho/Cabecalho.js'
import MenuHorizontal from '../MenuHorizontal/MenuHorizontal.js'
import AreaDados from '../AreaDados/AreaDados.jsx'
import Rodape from '../Rodape/Rodape.js'
import Cards from '../Cards/Cards.jsx'

function Geral() {
  return (
    <div className="container-flex">
      <Cabecalho />

      <AreaDados />

      <Cards />

      <Rodape />
    </div>
  )
}

export default Geral
