import React from 'react'
import { useState } from 'react'
import Input from '../Input'
import Select from '../Select'

import './AreaDados.css'

export default function AreaDados() {
  const [simulacaoData, setSimulacaoData] = useState({
    cep: '',
    valorDaConta: '',
    distribuidora: '',
  })

  function handleInput(event) {
    const { name, value } = event.target
    setSimulacaoData({ ...simulacaoData, [name]: value })
  }

  function showInput(name) {
    const isValidData = !!simulacaoData[name]
    return isValidData
  }
  return (
    <div className="AreaDados">
      <div class="flex-container">
        <div class="form-group">
          <p>Faça nossa simulação e veja o quanto você pode economizar</p>

          <Input name="cep" onClick={handleInput} placeholder="Digite seu CEP">
            {{
              icon: <i className="fa-solid fa-location-dot"></i>,
            }}
          </Input>
        </div>

        {showInput('cep') && (
          <div className="form-group show-input-animation">
            <Input
              name="valorDaConta"
              onClick={handleInput}
              placeholder="Digite o valor de sua conta"
            >
              {{
                icon: <i class="fa-solid fa-dollar-sign"></i>,
              }}
            </Input>
          </div>
        )}

        {showInput('valorDaConta') && (
          <div className="form-group show-input-animation">
            <Select
              options={[
                { label: 'CPFL Paulista', value: 1 },
                { label: 'TESSTE', value: 2 },
              ]}
              onChange={handleInput}
              name="distribuidora"
            >
              {{
                icon: <i class="fa-solid fa-bolt"></i>,
              }}
            </Select>
          </div>
        )}

        <div className="row my-3">
          <div className="col">
            <a
              id="login"
              type="button"
              href="/areaadm"
              class="btn btn-light btn-sm w-100"
            >
              Area Administrativa
            </a>
          </div>

          <div className="col">
            <button type="button" class="btn btn-primary btn-sm w-100">
              Simular
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
