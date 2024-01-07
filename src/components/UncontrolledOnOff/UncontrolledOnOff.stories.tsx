import React from 'react';
import UncontrolledOnOff from './UncontrolledOnOff';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Uncontrolled OnOff',
    component: UncontrolledOnOff,
}

const onChangeCB = action('ON/OFF was clicked');
export const FullFeatured = () => {
    return <UncontrolledOnOff onChange={onChangeCB} />
}
