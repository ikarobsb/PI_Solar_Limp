import { useState } from 'react'
import './style.css'

export default function Input({ children, placeholder, onInput = () => {}, onClick = () => {}, name }) {
  const [value, setValue] = useState('')

  function handleInput(event) {
    const { value } = event.target
    setValue(value)
    onInput(value)
  }

  function handleClick(event) {
    event.target.value = value
    onClick(event)
  }
  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-addon d-flex">
          <div className="d-flex align-items-center">{children.icon}</div>
        </span>
      </div>
      <input
        name={name}
        onInput={handleInput}
        className="form-control custom-input rounded"
        type="text"
        placeholder={placeholder}
      />

      <div className="ml-2">
        <button name={name} onClick={handleClick} className="btn btn-primary">
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  )
}
