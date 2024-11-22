import React, {KeyboardEvent, FocusEvent, useEffect, useRef, useState} from 'react'
import s from './Select.module.css'

type SelectProps = {
  options: Option[]
  value: string | null
  setValue: (value: string) => void
  placeholder?: string
  startExpanded?: boolean
}

export function Select(props: SelectProps) {
  const {value, setValue, options} = props

  const [expanded, setExpanded] = useState<boolean>(props.startExpanded ?? false)
  const initialFocused = value ? value : options[0].value
  const [focused, setFocused] = useState<string>(initialFocused)

  const className = `${s.select} ${expanded ? s.selectExpanded : ''}`

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
    setFocused(value)
    setExpanded(false)
  }

  const handleKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    if (['Enter', 'Space'].includes(e.code)) {
      setExpanded(!expanded)
      setFocused(initialFocused)
    }
  }

  return (
    <div className={className} tabIndex={0} onKeyUp={handleKeyUp}>

      <Headline
        caption={getTitle(value)}
        onClick={() => setExpanded(!expanded)}
      />
      {expanded &&
          <Options
              options={options}
              onOptionClick={handleOptionClick}
              selected={value}
              focused={focused}
              setFocused={setFocused}
              setExpanded={setExpanded}
          />
      }
    </div>
  );
}

type HeadlineProps = {
  onClick: () => void
  caption: string
}

function Headline({caption, onClick}: HeadlineProps) {
  return <div
    className={s.headline}
    onClick={onClick}
  >{caption}</div>;
}

export type Option = {
  title: string
  value: string
}

type OptionsProps = {
  options: Option[]
  onOptionClick: (value: string) => void
  selected: string | null
  focused: string
  setFocused: (value: string) => void
  setExpanded: (value: boolean) => void
}

function Options(props: OptionsProps) {
  const {options, onOptionClick, selected, focused, setFocused, setExpanded} = props
  const focusedOption = useRef<HTMLLIElement | null>(null)

  useEffect(() => {
    focusedOption.current?.focus()
  }, [focusedOption, focused])

  const handleKeyUp = (
    e: KeyboardEvent<HTMLLIElement>,
    value: string,
    i: number,
  ) => {
    if (['Enter', 'Space'].includes(e.code)) {
      onOptionClick(value)
    }
    if (['ArrowDown'].includes(e.code)) {
      e.preventDefault()
      if (i >= options.length - 1) {
        return
      }
      setFocused(options[i + 1].value)
    }
    if (['ArrowUp'].includes(e.code)) {
      e.preventDefault()
      if (i <= 0) {
        return
      }
      setFocused(options[i - 1].value)
    }
  }

  const handleBlur = (e: FocusEvent<HTMLUListElement>) => {
    if (e.relatedTarget?.getAttribute('tabIndex') !== '-1') {
      setExpanded(false)
    }
  }

  return (
    <ul onBlurCapture={handleBlur} className={s.options}>
      {options.map(({value, title}, i) => {
        const className = `${s.option} ${selected === value ? s.optionSelected : ''}`
        const ref = focused === value ? focusedOption : null

        return (
          <li
            key={value}
            tabIndex={-1}
            className={className}
            ref={ref}
            onClick={() => onOptionClick(value)}
            onKeyUp={(e) => handleKeyUp(e, value, i)}
          >
            {title}
          </li>
        )
      })}
    </ul>
  )
}
