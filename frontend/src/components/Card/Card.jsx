import React from 'react'
import './card.css'
export default function Card({titulo, texto, imagem, alt='Imagem do card', children}) {
  return (
    <div className="card-container" >
      <img src={imagem} className="card-imagem" alt={alt} />
      <div className="card-corpo">
        <h5 className="card-titulo">{titulo ? titulo : children? children : ''}</h5>
        <p className="card-descricao">
         {texto}
        </p>
       
      </div>
    </div>
  )
}
