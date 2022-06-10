import React from "react";
import './Geral.css';
import Cabecalho from "../Cabecalho/Cabecalho.js";
import MenuHorizontal from "../MenuHorizontal/MenuHorizontal.js";
import AreaDados from "../AreaDados/AreaDados.jsx";
import Rodape from "../Rodape/Rodape.js";
import Cards from "../Cards/Cards.jsx";

function Geral() {
  return (
    <div className="">
     <div className="row">
      <div className="col">
       <Cabecalho/>
      </div>
     </div>
      {/* <MenuHorizontal/> */}
     <div className="row ">
      <div className="col">
         <AreaDados/>
         </div>
     </div>

      <div className="row my-2">
        <div className="col">
        <Cards />
        </div>
      </div>
      <Rodape/>
    </div>
  );
}

export default Geral;
