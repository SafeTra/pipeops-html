import './input.css'

const Input = ({type, name, label, value, onChange, className=''}) => {
  return (
    <div className={`form ${className}`}>
      <input value={value} name={name} onChange={onChange} type={type} className="form__input" placeholder=" "/>
      <label htmlFor={name} className="form__label">{label}</label>
    </div>
  )
}

export default Input