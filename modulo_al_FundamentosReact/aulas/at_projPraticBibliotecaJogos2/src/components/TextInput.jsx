import propTypes from "prop-types"

TextInput.propTypes = {
  id: propTypes.string,
  label: propTypes.string,
  value: propTypes.string,
  setValue: propTypes.func
}

export default function TextInput({id, label, value, setValue}){
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input 
        type="text" 
        name={id} 
        id={id} 
        value={value}  
        onChange={(ev) => setValue(ev.target.value)}
      />
  </div>
  )
}