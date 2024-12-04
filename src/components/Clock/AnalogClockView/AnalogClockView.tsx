import React from 'react';
import {ClockViewProps} from '../Clock';
import s from './AnalogClockView.module.css'

const AnalogClockView = ({time}: ClockViewProps) => {
  const {hour, minute, second} = time
  const secondsArrowRotationAngle = -90 + parseInt(second) * 6
  const minutesArrowRotationAngle = -90 + parseInt(minute) * 6
  const hoursArrowRotationAngle = -90 + parseInt(hour) * 30
    + (Math.round(30 * (minutesArrowRotationAngle + 90) / 360))

  return (
    <div className={s.clock}>
      <div
        className={s.secondsArrow}
        style={{
          transform: `rotate(calc(${secondsArrowRotationAngle}deg))`
        }}
      ></div>
      <div
        className={s.minutesArrow}
        style={{
          transform: `rotate(calc(${minutesArrowRotationAngle}deg))`
        }}
      ></div>
      <div
        className={s.hoursArrow}
        style={{
          transform: `rotate(calc(${hoursArrowRotationAngle}deg))`
        }}
      ></div>

      <span className={`${s.hourThree} ${s.hourDigit}`}>3</span>
      <span className={`${s.hourSix} ${s.hourDigit}`}>6</span>
      <span className={`${s.hourNine} ${s.hourDigit}`}>9</span>
      <span className={`${s.hourTwelve} ${s.hourDigit}`}>12</span>
      <span className={s.clockFaceCenter}></span>
    </div>
  );
};

export default AnalogClockView;