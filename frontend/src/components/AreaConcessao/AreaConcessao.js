import React from "react";
import { useEffect, useState } from "react";
import Cabecalho from "../Cabecalho/Cabecalho.js";
import MenuHorizontal from "../MenuHorizontal/MenuHorizontal.js";
import AreaConcessaoHeader from "../Tabelas/AreaConcessaoHeader.js";

import api from "../../services/api.js"

import Moment from 'react-moment'

import "./AreaConcessao.css"


function AreaConcessao() {

  const [areaconcessao, setAreaConcessao] = useState([])

  useEffect(() => {
    api.get('areaconcessao')
      .then(response => setAreaConcessao(response.data))

  }, []
  )

  return (

    <div id="id" className="areaConcessao">
      <Cabecalho />
      <MenuHorizontal />
      
      <legend>Áreas de Concessão Cadastradas</legend>

      <div className="tabela">
        <table className="table table-striped">
          <AreaConcessaoHeader />
         
        

          <tbody>
            {areaconcessao.map((item, i) => {
              return (
                <>
                  <tr>
                    <td id="p_id">{item.id}</td>
                    <td id='P_estado'>{item.estado}</td>
                    <td id='p_cidade'>{item.cidade}</td>
                    

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
              <td>Quantidade de registros: {areaconcessao.length} </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )

}

export default AreaConcessao;

//<td id="editar"> <a class="btn btn-primary btn-block" href=<%="/autores/editar/" + obj_autores[i].aut_codigo %>> Editar </a></td>
//<td id="ativar"> <a class="btn btn-danger btn-block" href=<%="/autores/ativoInativo/" + obj_autores[i].aut_codigo %>> Inativar </a></td>
