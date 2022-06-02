import React from "react";
import card1 from "../../assets/CardDiscount.png"
import card2 from "../../assets/CardEnvironment.png"
import card3 from "../../assets/CardSolarLimp.png"
import text from "../../assets/text.png"
import Button from "../../assets/Button.png"
import "./CardImg.css"; 



export default function CardImg() {
    return (
        <div className="container">
          <div className="text">
            <img className="text" src={text}></img>
          </div>
  <div className="row">
    <div className="col-sm">
    <img className="card" src={card1} alt="card1"></img>
    </div>
    <div className="col-sm">
    <img className="card" src={card2} alt="card2"></img>
    </div>
    <div className="col-sm">
    <img className="card" src={card3} alt="card3"></img>
    </div>

    
    <a id="buttontop" className="float-right" href='/' alt="voltar ao topo" type="submit"><img src={Button}></img></a>
    
  </div>
      
      
      
</div>
        
    );
    }