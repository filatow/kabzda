import React, {useState} from 'react';
import './OnOff.css'

type OnOffPropsType = {
    isSwitchedOn: boolean
}

export const OnOff = (props: OnOffPropsType) => {
    const [isSwitchedOn, setIsSwitchedOn] = useState<boolean>(props.isSwitchedOn);

    const onButtonClassName = `switcher__button switcher__onButton ${isSwitchedOn && 'switcher__onButton_active'}`;
    const offButtonClassName = `switcher__button switcher__offButton ${!isSwitchedOn && 'switcher__offButton_active'}`;
    const indicatorClassName = `switcher__indicator ${isSwitchedOn && 'switcher__indicator_isOn'}`;

    return (
        <div className={'switcher'}>
            <button onClick={() => setIsSwitchedOn(true)} className={onButtonClassName}>ON</button>
            <button onClick={() => setIsSwitchedOn(false)} className={offButtonClassName}>OFF</button>
            <span className={indicatorClassName}></span>
        </div>
    );
};
