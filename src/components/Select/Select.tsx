import React, {useState} from 'react'
import s from './Select.module.css'

type SelectProps = {
  options: Option[]
  value: string | null
  setValue: (value: string) => void
  placeholder?: string
  startCollapsed?: boolean
}

export function Select(props: SelectProps) {
  const [collapsed, setCollapsed] = useState<boolean>(props.startCollapsed ?? true)
  const value = props.value || null
  const {setValue} = props
  const className = `${s.select} ${!collapsed && s.selectExpanded}`

  const getTitle = (value: string | null) => {
    const placeholder = props.placeholder || 'Выбрать'
    if (!value) {
      return placeholder
    }
    const option = props.options.find((opt) => opt.value === value)
    return option ? option.title : placeholder
  }

  const handleOptionClick = (value: string) => {
    setValue(value)
    setCollapsed(true)
  }

  return (
    <div className={className}>
      <Headline
        caption={getTitle(value)}
        onClick={() => setCollapsed(!collapsed)}
      />
      {!collapsed && <Options options={props.options} onOptionClick={handleOptionClick}/>}
    </div>
  );
}

type CurrentSelectedProps = {
  onClick: () => void
  caption: string
}

function Headline({caption, onClick}: CurrentSelectedProps) {
  return <div className={s.headline} onClick={onClick}>{caption}</div>;
}

export type Option = {
  title: string
  value: string
}

type OptionsProps = {
  options: Option[]
  onOptionClick: (value: string) => void
}

function Options({options, onOptionClick}: OptionsProps) {
  return (
    <ul className={s.options}>
      {options.map(({value, title}) => (
        <li key={value} onClick={() => onOptionClick(value)}>
          {title}
        </li>
      ))}
    </ul>
  )
}
