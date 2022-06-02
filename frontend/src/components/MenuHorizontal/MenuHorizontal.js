import React from "react";
import './MenuHorizontal.css';


function MenuHorizontal() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/areaadm">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
      <li class="nav-item">
          <a class="nav-link" href="/">Layout Principal</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/usuarios">Usuarios</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/distribuidoras">Distribuidoras</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="areaconcessao">Área de Concessão</a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    
  );
}

export default MenuHorizontal;
