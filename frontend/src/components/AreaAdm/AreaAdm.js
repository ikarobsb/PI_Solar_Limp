import React from "react";
import './AreaAdm.css';
import Jumbotrom from "../Jumbotrom/Jumbotrom";
import MenuHorizontal from "../MenuHorizontal/MenuHorizontal";
import Cabecalho from "../Cabecalho/Cabecalho";
import Rodape from "../Rodape/Rodape";
import "../Geral/Geral.css";




export default function AreaAdm() {
  return (
    
    <div className="AreaAdm">
      <Cabecalho />
      <MenuHorizontal />
      <Jumbotrom />
      <Rodape />

    

          
    </div>
  );
}

