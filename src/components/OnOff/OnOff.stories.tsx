import {OnOff} from './OnOff';
import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';

export default {
    title: 'OnOff',
    component: OnOff
}

const onToggleCB = action('ON/OFF was clicked');

export const FullFeatured = () => {
    const [on, setOn] = useState<boolean>(true);
    const onToggleHandler = (value: boolean) => setOn(value);

    return <OnOff isOn={on} onToggle={onToggleHandler} />
}

export const OnMode = () => {
    return <OnOff isOn={true} onToggle={onToggleCB} />
}

export const OffMode = () => {
    return <OnOff isOn={false} onToggle={onToggleCB} />
}