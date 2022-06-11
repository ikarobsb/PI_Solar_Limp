import React from 'react'

import Card from '../Card/Card'
import economizeImage from '../../assets/econonize-image.png'
import meioAmbienteImage from '../../assets/meioambiente-image.png'
import porqueSolarLimp from '../../assets/porque-solar-limp-image.png'
import './Cards.css'
import ScrollParaOTopo from '../ScrollParaOTopo'
export default function AreaDados() {
  return (
    <div>
      <h3 className="text-investir">
        Porque investir em <span className="texto-especial">energia solar</span>
        ?
      </h3>
      <div className="cards-containers">
        <Card
          titulo="Economize"
          imagem={economizeImage}
          texto={`A energia solar gera uma economia que varia de 50% e 95% na conta de luz. O investimento feito para instalação de placas solares acaba sendo pago pelo dinheiro economizado com a redução de gastos.`}
        />
        <Card
          titulo="Contribua com o meio-ambiente"
          imagem={meioAmbienteImage}
          texto={`Contribua com o meio ambiente
          A energia oriunda de fontes limpas, como as placas solares, contribui com a diminuição de emissão de gases prejudiciais para a camada de ozônio. Fontes energéticas, como a fotovoltaica, impactam positivamente ao meio ambiente, com a diminuição do aquecimento global e efeito estufa, diminuindo a sua pegada de carbono.`}
        />
        <Card
          imagem={porqueSolarLimp}
          texto={`Somos uma aplicação totalmente gratuita, que visa tornar acessível e popular fontes de energia limpas para todos, demonstrando o quão viável economicamente é um investimento em placas solares para qualquer um, mesmo para pequenos imóveis.
          Além de poder fazer nossa simulação sem nenhum gasto, o nosso usuário pode realizar um cadastro simples e fazer parte de nosso grupo de vantagens, podendo obter cupons de descontos em nossos parceiros.`}
        >
          Por que a <span className="texto-especial">solar limp</span>
        </Card>
      </div>

      <ScrollParaOTopo></ScrollParaOTopo>
    </div>
  )
}
