import React, {useEffect, useState} from 'react';

const getNowTimeObj = (): State => {
  const now = new Date()
  const getFormatted = (num: number) => num.toString().padStart(2, '0')

  return {
    hour: getFormatted(now.getHours()),
    minute: getFormatted(now.getMinutes()),
    second: getFormatted(now.getSeconds())
  }
}

const Clock: React.FC<PropsType> = () => {
  const [{hour, minute, second}, setState] = useState<State>(getNowTimeObj)


  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('tick', `${hour}:${minute}:${second}`)
      setState(getNowTimeObj())
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div>
      {hour} : {minute} : {second}
    </div>
  );
};

export default Clock;

type PropsType = {}

type State = {
  hour: string,
  minute: string,
  second: string
}