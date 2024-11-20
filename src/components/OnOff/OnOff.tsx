import React from 'react';
import s from './OnOff.module.css'

type OnOffProps = {
  isOn: boolean
  onToggle: (value: boolean) => void
}

export const OnOff = (props: OnOffProps) => {

  const onButtonClassName = `${s.button} ${props.isOn && s.onButtonActive}`;
  const offButtonClassName = `${s.button} ${!props.isOn && s.offButtonActive}`;
  const indicatorClassName = `${s.indicator} ${props.isOn && s.indicatorIsOn}`;

  return (
    <div className={s.switcher}>
      <button onClick={() => props.onToggle(true)} className={onButtonClassName}>ON</button>
      <button onClick={() => props.onToggle(false)} className={offButtonClassName}>OFF</button>
      <span className={indicatorClassName}></span>
    </div>
  );
};
