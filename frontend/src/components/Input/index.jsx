import './style.css'

export default function Input({ children, placeholder, onInput }) {
  return (
    <div className="input-group">
      <div className="input-group-prepend ">
        <span className="input-group-addon">{children.icon}</span>
      </div>
      <input
        onInput={onInput}
        className="form-control custom-input rounded"
        type="text"
        placeholder={placeholder}
      />

      <div className="ml-2">
      {children.button}
      </div>
    </div>
  )
}
