import React from "react";
import Input from '../Input';
import './AreaDados.css';


export default function AreaDados() {
  return (
    
    <div className="AreaDados">
      
      <div class="flex-container">
        
        <div class="form-group">
            <p>Faça nossa simulação e veja o quanto você pode economizar</p>    
            

            <Input placeholder="Digite seu CEP" >
              {
                {
                  icon: <i className="fa-solid fa-location-dot"></i>,
                  button: <button className="btn btn-primary">  <i class="fa-solid fa-arrow-right"></i> </button>
                }
              }
            </Input>
           </div>
        
           <div className="form-group ">
                 
            <div className="input-group">
             <div className="input-group-addon">
             <i class="fa-solid fa-dollar-sign"></i> 
                   
             </div>
             <input className="form-control" id="cep" name="cep" type="text" placeholder="Digite o valor de sua conta"/>
            </div>
           </div>
        
           <div className="input-group">
            <div className="input-group-addon">
            <i class="fa-solid fa-bolt"></i>  
            
            </div>
            
            <select className="form-control">
                <option>CPFL Paulista</option>
                <option>Opção 2</option>
                <option>Opção 3</option>
                <option>Opção 4</option>
              </select>
           </div>
     
          <div className="row mt-3">
            <div className="col"> 
              <a id= "login" type="button" href="/areaadm" class="btn btn-light btn-sm w-100">Area Administrativa</a>
            </div>
            
            <div className="col">
              <button type="button" class="btn btn-primary btn-sm w-100">Simular</button>
            </div>
          </div>
          </div>
          
          
    </div>
  );
}

