import React from 'react'
import classnames from 'classnames'

function InputGroup({label, type, name, onChange, errors, value}) {
  return (
    <div className="mb-3">
    <label for="Email" className="form-label">
      {label}
    </label>
    <input type={type} value={value} className={(classnames("form-control", {"is-invalid": errors}))}  name={name} onChange={onChange}/>
    {
      errors && (<div class="invalid-feedback">
      {errors}
    </div>)
    }
  </div>
  )
}

export default InputGroup