import React, {useState} from 'react';
import s from './UncontrolledOnOff.module.css'

type UncontrolledOnOffProps = {
  onChange: (isOn: boolean) => void
  defaultOn?: boolean
}

const UncontrolledOnOff = (props: UncontrolledOnOffProps) => {
  const initialOn = props.defaultOn || false;
  const [on, setOn] = useState<boolean>(initialOn);

  const onButtonClassName = `${s.button} ${on && s.onButtonActive}`;
  const offButtonClassName = `${s.button} ${!on && s.offButtonActive}`;
  const indicatorClassName = `${s.switcher} ${on && s.indicatorIsOn}`;
  const onButtonClickHandler = () => {
    setOn(true)
    props.onChange(true)
  };
  const offButtonClickHandler = () => {
    setOn(false)
    props.onChange(false)
  };

  return (
    <div className={s.switcher}>
      <button
        className={onButtonClassName}
        onClick={onButtonClickHandler}
      >ON
      </button>
      <button
        className={offButtonClassName}
        onClick={offButtonClickHandler}
      >OFF
      </button>
      <span className={indicatorClassName}></span>
    </div>
  );
};

export default UncontrolledOnOff;