import './style.css'

export default function Select({ name,children, placeholder, onChange, onClick, options = [{value: null, label: 'Nenhuma distribuidora encontrada'}], value }) {
  function handleChange(event) {
    onChange(event)
  }
  function optionsToHtml(opts) {
    return opts.map((option, i) => {
      return <option key={i} className={!option.value? 'text-null': ''} value={option.value}>{option.label}</option>
    })
  }
  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-addon d-flex">
          <div className="d-flex align-items-center">{children && children.icon}</div>
        </span>
      </div>
      <select name={name} value={value} onChange={handleChange} placeholder={placeholder} className="form-control rounded custom-select">
        {optionsToHtml(options)}
      </select>

      
    </div>
  )
}
