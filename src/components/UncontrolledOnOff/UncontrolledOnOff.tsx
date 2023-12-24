import React, {useState} from 'react';
import './UncontrolledOnOff.css'


export const UncontrolledOnOff = () => {
    const [on, setOn] = useState<boolean>(true);

    const onButtonClassName = `switcher__button switcher__onButton ${on && 'switcher__onButton_active'}`;
    const offButtonClassName = `switcher__button switcher__offButton ${!on && 'switcher__offButton_active'}`;
    const indicatorClassName = `switcher__indicator ${on && 'switcher__indicator_isOn'}`;

    return (
        <div className={'switcher'}>
            <button onClick={() => setOn(true)} className={onButtonClassName}>ON</button>
            <button onClick={() => setOn(false)} className={offButtonClassName}>OFF</button>
            <span className={indicatorClassName}></span>
        </div>
    );
};
