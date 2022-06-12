import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import api from '../../services/api'
import Input from '../Input'
import Select from '../Select'
import 'react-toastify/dist/ReactToastify.css'

export default function Formulario({ handleSimular, loadingSimulacao }) {
  async function onSimular() {
    const isValidData = isValidSimulacaoData()
    if(!isValidData.error) {
      await handleSimular(simulacaoData)
    }else{
      notifyError(isValidData.message)
    }
  }
  const notifyError = customError => {
    toast.error(
      error.message
        ? error.message
        : customError
        ? customError
        : 'Ocorreu algum erro inesperado!',
      { autoClose: true, style: { width: '250px' } }
    )
  }
  const [simulacaoData, setSimulacaoData] = useState({
    cep: '',
    valorDaConta: '',
    distribuidoraId: '',
  })
  function isValid(field) {
    return !!simulacaoData[field]
  }
  function isValidSimulacaoData() {
    const { cep, valorDaConta, distribuidoraId } = simulacaoData
    if (!cep || cep.length < 8) {
      return {
        error: true,
        message: 'CEP inválido!',
      }
    }

    if (!valorDaConta || valorDaConta <= 0) {
      return {
        error: true,
        message: 'Valor da conta inválido!',
      }
    }

    if (!distribuidoraId) {
      return {
        error: true,
        message: 'Distribuidora inválida!',
      }
    }

    return {
      error: false,
    }
  }

  const [error, setError] = useState({
    message: '',
    hasError: false,
  })

  const [distribuidoras, setDistribuidoras] = useState([])

  const [loading, setLoading] = useState(false)
  

  function reset() {
    setSimulacaoData({
      valorDaConta: '',
      distribuidoraId: '',
    })

    setDistribuidoras([])
  }

  async function handleCep(cep) {
    const response = await api.get(`/simulacoes/distribuidoras`, {
      params: { cep },
    })

    return response
  }

  async function handleInput(event) {
    setError({ hasError: false, message: '' })
    const { name, value } = event.target
    if (!name) {
      return
    }
    if (name === 'cep') {
      setDistribuidoras([])
      setLoading(true)
      try {
        const { data } = await handleCep(value)
        const distribuidorasMapped = data.power_distributors.map(
          distribuidora => ({
            value: distribuidora.id,
            label: distribuidora.name,
          })
        )
        setDistribuidoras(distribuidorasMapped)
        setSimulacaoData({
          ...simulacaoData,
          [name]: value,
          distribuidoraId: distribuidorasMapped[0].value,
        })
        return
      } catch (error) {
        setError({ hasError: true, message: error.response.data.message })
        notifyError()
        return
      } finally {
        setLoading(false)
      }
    }
    setSimulacaoData({ ...simulacaoData, [name]: value })
  }

  function showInput(name) {
    const isValidData = !!simulacaoData[name]
    return isValidData
  }
  return (
    <>
      <div class="form-group">
        <p>Faça nossa simulação e veja o quanto você pode economizar</p>

        <Input
          validatedAndDisabled={isValid('cep')}
          type="number"
          name="cep"
          onInput={() => reset()}
          onClick={handleInput}
          placeholder="Digite seu CEP"
          loading={loading}
        >
          {{
            icon: <i className="fa-solid fa-location-dot"></i>,
          }}
        </Input>
        <ToastContainer />
      </div>

      {showInput('cep') && (
        <div className="form-group show-input-animation">
          <Input
            validatedAndDisabled={isValid('valorDaConta')}
            type="number"
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
            options={distribuidoras}
            onChange={handleInput}
            name="distribuidoraId"
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
          <button
            disabled={isValidSimulacaoData().error}
            type="button"
            class="btn btn-primary btn-sm w-100"
            onClick={onSimular}
          >
            {loadingSimulacao ? (
              <div
                class="spinner-border text-primary spinner-border-sm"
                role="status"
              />
            ) : (
              <span>Simular</span>
            )}
          </button>
        </div>
      </div>
    </>
  )
}
