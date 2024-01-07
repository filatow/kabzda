import React, {useState} from 'react';
import './UncontrolledOnOff.css'

type UncontrolledOnOffPropsType = {
    onChange: (isOn: boolean) => void
    defaultOn?: boolean
}

const UncontrolledOnOff = (props: UncontrolledOnOffPropsType) => {
    const initialOn = props.defaultOn || false;
    const [on, setOn] = useState<boolean>(initialOn);

    const onButtonClassName = `switcher__button switcher__onButton ${on && 'switcher__onButton_active'}`;
    const offButtonClassName = `switcher__button switcher__offButton ${!on && 'switcher__offButton_active'}`;
    const indicatorClassName = `switcher__indicator ${on && 'switcher__indicator_isOn'}`;
    const onButtonClickHandler = () => {
        setOn(true)
        props.onChange(true)
    };
    const offButtonClickHandler = () => {
        setOn(false)
        props.onChange(false)
    };

    return (
        <div className={'switcher'}>
            <button
                className={onButtonClassName}
                onClick={onButtonClickHandler}
            >ON</button>
            <button
                className={offButtonClassName}
                onClick={offButtonClickHandler  }
            >OFF</button>
            <span className={indicatorClassName}></span>
        </div>
    );
};

export default UncontrolledOnOff;