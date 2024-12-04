import Clock from './Clock';
import React, {useState} from 'react';

export default {
  title: 'Clock'
}

export const SimpleClock = () => {
  return <Clock/>
}

export const ClockWithHideButton = () => {
  const [clockIsVisible, setClockIsVisible] = useState(true)

  return <>
    {clockIsVisible && <Clock />}
    <hr/>
    <button
      type={'button'}
      onClick={() => setClockIsVisible(clockIsVisible => !clockIsVisible)}
    >Toggle Clock</button>
  </>
}