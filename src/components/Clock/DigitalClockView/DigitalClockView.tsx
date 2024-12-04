import React from 'react';
import {ClockViewProps} from '../Clock';

const DigitalClockView = ({time}: ClockViewProps) => {
  const {hour, minute, second} = time

  return (
    <div style={{fontWeight: 'bold'}}>
      {hour} : {minute} : {second}
    </div>
  );
};

export default DigitalClockView;