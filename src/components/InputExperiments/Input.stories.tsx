import {ChangeEvent, useRef, useState} from 'react';

export default {
  title: 'Input',
}

export const Uncontrolled = () => <input type="text"/>

export const ControlledWithFixedValue = () => <input type="text" value={'constant value'}/>

export const UncontrolledWithTrackableValue = () => {
  const [value, setValue] = useState('')
  const handleInputChange = (e:  ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

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