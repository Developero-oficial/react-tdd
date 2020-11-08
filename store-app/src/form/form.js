import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'

export const Form = () => {
  const [formErrors, setFormErrors] = useState({
    name: '',
    size: '',
    type: '',
  })

  const handleSubmit = e => {
    e.preventDefault()

    const {name, size, type} = e.target.elements

    if (!name.value) {
      setFormErrors(prevState => ({...prevState, name: 'The name is required'}))
    }

    if (!size.value) {
      setFormErrors(prevState => ({...prevState, size: 'The size is required'}))
    }

    if (!type.value) {
      setFormErrors(prevState => ({...prevState, type: 'The type is required'}))
    }
  }

  return (
    <>
      <h1>Create product</h1>

      <form onSubmit={handleSubmit}>
        <TextField label="name" id="name" helperText={formErrors.name} />

        <TextField label="size" id="size" helperText={formErrors.size} />

        <InputLabel htmlFor="type">Type</InputLabel>

        <Select
          native
          value=""
          inputProps={{
            name: 'type',
            id: 'type',
          }}
        >
          <option aria-label="None" value="" />
          <option value="electronic">Electronic</option>
          <option value="furniture">Furniture</option>
          <option value="clothing">Clothing</option>
        </Select>

        {formErrors.type.length && <p>{formErrors.type}</p>}

        <Button type="submit">Submit</Button>
      </form>
    </>
  )
}

export default Form
