import { useState } from 'react'
import './style.css'

export default function Input({
  children,
  placeholder,
  onInput = () => {},
  onClick = () => {},
  name,
  loading,
  type,
  validatedAndDisabled = false
}) {
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
        type={type|| 'text'}
        placeholder={placeholder}
        disabled={validatedAndDisabled}
      />

      <div className="ml-2">
        <button disabled={validatedAndDisabled} name={name} onClick={handleClick} className="btn btn-primary">
          {loading ? (
            <div className="spinner-border spinner-border-sm" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : validatedAndDisabled? 
            (
              <i className="fas fa-check"></i>
            )
          :(
            <i class="fa-solid fa-arrow-right"></i>
          )}
        </button>
      </div>
    </div>
  )
}
