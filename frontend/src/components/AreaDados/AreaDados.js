import React from "react";
import './AreaDados.css';



export default function AreaDados() {
  return (
    
    <div className="AreaDados">
      
      <div class="flex-container">
        
        <div class="form-group">
            <p>Faça nossa simulação e veja o quanto você pode economizar</p>    
            <div className="input-group">
             <div className="input-group-addon">
             <i className="fa-solid fa-location-dot"></i>
             </div>
             <input className="form-control" id="cep" name="cep" type="text" placeholder="Digite seu CEP"/>
            
            </div>
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
           <br></br>
           <button type="button" class="btn btn-primary">Simular</button>
           <br></br>
           <br></br>
           <a id= "login" type="button" href="/areaadm" class="btn btn-light">Area Administrativa</a>
          </div>
          
          
    </div>
  );
}

