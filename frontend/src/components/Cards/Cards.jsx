import React from "react";

import Card from "../Card/Card";
import economizeImage from '../../assets/econonize-image.png'
import meioAmbienteImage from '../../assets/meioambiente-image.png'
import porqueSolarLimp from '../../assets/porque-solar-limp-image.png'
import './Cards.css'
import ScrollParaOTopo from '../ScrollParaOTopo'
const texto = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
export default function AreaDados() {
  return (
    <div>
      <h3 className='text-investir'>
        Porque investir em <span className="texto-especial">energia solar</span>?
      </h3>
      <div className='cards-containers'>
        <Card titulo='Economize' imagem={economizeImage} texto={texto} />
        <Card titulo='Contribua com o meio-ambiente' imagem={meioAmbienteImage} texto={texto} />
        <Card  imagem={porqueSolarLimp} texto={texto} > 
        Por que a <span className='texto-especial'>solar limp</span>
        </Card>
      </div>

      <ScrollParaOTopo></ScrollParaOTopo>
    </div>
  );
}

