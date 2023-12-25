import React from 'react';
import './OnOff.css'

type OnOffPropsType = {
    isOn: boolean
    onToggle: (value: boolean) => void
}

export const OnOff = (props: OnOffPropsType) => {

    const onButtonClassName = `switcher__button switcher__onButton ${props.isOn && 'switcher__onButton_active'}`;
    const offButtonClassName = `switcher__button switcher__offButton ${!props.isOn && 'switcher__offButton_active'}`;
    const indicatorClassName = `switcher__indicator ${props.isOn && 'switcher__indicator_isOn'}`;

    return (
        <div className={'switcher'}>
            <button onClick={() => props.onToggle(true)} className={onButtonClassName}>ON</button>
            <button onClick={() => props.onToggle(false)} className={offButtonClassName}>OFF</button>
            <span className={indicatorClassName}></span>
        </div>
    );
};
