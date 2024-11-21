import {ChangeEvent, useRef, useState} from 'react'
import {action} from '@storybook/addon-actions'

export default {
  title: 'Input',
}

const inputChange = action('Want to change')


export const Uncontrolled = () => <input type="text"/>

export const ControlledWithFixedValue = () => <input type="text" value={'constant value'}/>

export const UncontrolledWithTrackableValue = () => {
  const [value, setValue] = useState('')
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

  return <>
    <input type="text" onChange={handleInputChange}/>
    - value: {value}
  </>
}

export const UncontrolledTrackedByUseRef = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState<string>('')

  const handleButtonClick = () => {
    inputRef.current && setValue(inputRef.current.value)
  }

  return <>
    <input type={'text'} ref={inputRef}/>
    <button onClick={() => handleButtonClick()}>set value</button>
    - value: {value}
  </>
}

export const ControlledInput = () => {
  const [value, setValue] = useState('')
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  return <input type="text" value={value} onChange={handleInputChange}/>
}

export const ControlledCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false)
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.currentTarget.checked)
  }

  return <label>
    <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
    NDA
  </label>
}


const changeSelect = action('Want to change select')
export const ControlledSelect = () => {
  const [value, setValue] = useState<string | undefined>()
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.currentTarget.value)
  }

  return(
    <select value={value} onChange={handleSelectChange}>
      <option>none</option>
      <option value="first">1</option>
      <option value="second">2</option>
      <option value="third">3</option>
    </select>
  )
}
