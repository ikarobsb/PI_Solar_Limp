import React from "react";
import { useEffect, useState } from "react";
import Cabecalho from "../Cabecalho/Cabecalho.js";
import MenuHorizontal from "../MenuHorizontal/MenuHorizontal.js";
import DistribuidorasHeader from "../Tabelas/DistribuidorasHeader.js";

import api from "../../services/api.js"

import Moment from 'react-moment'

import "./Distribuidoras.css"


function Distribuidoras() {

  const [distribuidoras, setDistribuidoras] = useState([])

  useEffect(() => {
    api.get('distribuidoras')
      .then(response => setDistribuidoras(response.data))

  }, []
  )

  return (

    <div id="id" className="distribuidoras">
      <Cabecalho />
      <MenuHorizontal />
      
      <legend>Distribuidoras Cadastradas</legend>

      <div className="tabela">
        <table className="table table-striped">
          <DistribuidorasHeader />
         
        

          <tbody>
            {distribuidoras.map((item, i) => {
              return (
                <>
                  <tr>
                    <td id="p_id">{item.id}</td>
                    <td id='p_nome'>{item.nome}</td>
                    <td id='p_email'>{item.kw}</td>
                    

                    <td id="p_dtinclusao"><Moment format="DD/MM/YYYY">{(item.createdAt)}</Moment> </td>

                    <td id='p_dtalteracao'><Moment format="DD/MM/YYYY">{item.updatedAt}</Moment> </td>

                    

                    <td></td>
                  </tr>
                </>
              )
            })}
          </tbody>
          <tfoot>
            <tr id='registros'>
              <td>Quantidade de registros: {distribuidoras.length} </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )

}

export default Distribuidoras;

//<td id="editar"> <a class="btn btn-primary btn-block" href=<%="/autores/editar/" + obj_autores[i].aut_codigo %>> Editar </a></td>
//<td id="ativar"> <a class="btn btn-danger btn-block" href=<%="/autores/ativoInativo/" + obj_autores[i].aut_codigo %>> Inativar </a></td>
