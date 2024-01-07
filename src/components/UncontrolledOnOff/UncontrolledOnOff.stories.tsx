import React from 'react';
import UncontrolledOnOff from './UncontrolledOnOff';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Uncontrolled OnOff',
    component: UncontrolledOnOff,
}

const onChangeCB = action('ON/OFF was clicked');
export const FullFeatured = () => <UncontrolledOnOff onChange={onChangeCB} />
export const WithDefaultIsOn = () => <UncontrolledOnOff defaultOn={true} onChange={onChangeCB} />
export const WithDefaultIsOff = () => <UncontrolledOnOff defaultOn={false} onChange={onChangeCB} />

