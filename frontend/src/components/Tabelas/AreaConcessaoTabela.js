import React from "react";
import TabelaHeader from "./AreaConcessaoHeader.js";
import TabelaFooter from "./AreaConcessaoFooter.js";


export default function Tabela(props) {


    const arrayDados = props.dados;
    console.log("Dados: " + props.dados)


    return (
        <div className="jumbotrom">
        <div className="tabela">
            <table>
                <TabelaHeader />

                <tbody>



                    <tr>
                        <td>{item.id}</td>
                        <td>{item.estado}</td>
                        <td>{item.cidade}</td>
                        

                        
                    </tr>

                </tbody>
                <TabelaFooter registros={props.dados.length} />
            </table>
        </div>
        </div>
    )


}

