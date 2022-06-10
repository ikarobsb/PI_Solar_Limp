import React from "react";
import { useEffect, useState } from "react";
import Cabecalho from "../Cabecalho/Cabecalho.js";
import MenuHorizontal from "../MenuHorizontal/MenuHorizontal.js";
import UsuariosHeader from "../Tabelas/UsuariosHeader.js";

import api from "../../services/api.js"

import Moment from 'react-moment'

import "./Usuarios.css"
import Geral from "../Geral/Geral.js";

function Usuarios() {

  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    api.get('usuarios')
      .then(response => setUsuarios(response.data))

  }, []
  )

  return (

    <div id="id" className="usuarios">
      <Cabecalho />
      <MenuHorizontal />
      
      <legend>Usuários Cadastrados</legend>

      <div className="tabela">
        <table className="table table-striped">
          <UsuariosHeader />
         
        

          <tbody>
            {usuarios.map((item, i) => {
              return (
                <>
                  <tr>
                    <td id="p_id">{item.id}</td>
                    <td id='p_nome'>{item.nome}</td>
                    <td id='p_email'>{item.email}</td>
                    <td id='p_telefone'>{item.telefone}</td>

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
              <td>Quantidade de registros: {usuarios.length} </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )

}

export default Usuarios;

//<td id="editar"> <a class="btn btn-primary btn-block" href=<%="/autores/editar/" + obj_autores[i].aut_codigo %>> Editar </a></td>
//<td id="ativar"> <a class="btn btn-danger btn-block" href=<%="/autores/ativoInativo/" + obj_autores[i].aut_codigo %>> Inativar </a></td>
