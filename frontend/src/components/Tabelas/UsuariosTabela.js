import React from "react";
import TabelaHeader from "./DistribuidorasHeader.js";
import TabelaFooter from "./DistribuidorasFooter.js";


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
                        <td>{item.nome}</td>
                        <td>{item.kw}</td>
                        

                        
                    </tr>

                </tbody>
                <TabelaFooter registros={props.dados.length} />
            </table>
        </div>
        </div>
    )


}

