import React, { useEffect, useState} from 'react';
import DigitalClockView from './DigitalClockView/DigitalClockView';
import AnalogClockView from './AnalogClockView/AnalogClockView';

const getNowTimeObj = (): ClockState => {
  const now = new Date()
  const getFormatted = (num: number) => num.toString().padStart(2, '0')

  return {
    hour: getFormatted(now.getHours()),
    minute: getFormatted(now.getMinutes()),
    second: getFormatted(now.getSeconds())
  }
}

const Clock: React.FC<ClockProps> = (props) => {
  const [format, setFormat] = useState(() => props.format || 'digital')
  const [state, setState] = useState<ClockState>(getNowTimeObj)
  const {hour, minute, second} = state

  let view: React.ReactElement
  switch (format) {
    case 'analog': {
      view = <AnalogClockView time={state}/>
      break
    }
    case 'digital':
    default: {
      view = <DigitalClockView time={state}/>
    }

  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('tick', `${hour}:${minute}:${second}`)
      setState(getNowTimeObj())
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const toggleFormat = () => setFormat(
    format => format === 'digital' ? 'analog' : 'digital'
  )

  return (
    <>
      <button
        style={{marginBottom: '15px'}}
        type={'button'}
        onClick={toggleFormat}
      >Toggle Clock Format</button>
      {view}
    </>
  );
};

export default Clock;

type Format = 'digital' | 'analog'

type ClockProps = {
  format?: Format
}

export type ClockState = {
  hour: string,
  minute: string,
  second: string
}

export type ClockViewProps = {
  time: ClockState
}