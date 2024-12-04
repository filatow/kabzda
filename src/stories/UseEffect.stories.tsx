import {useEffect, useState} from 'react';

export default {
  title: 'useEffect'
}

export const SimpleExample = () => {
  console.log('SimpleExample')
  const [counter, setCounter] = useState(1)
  const [fake, setFake] = useState(1)

  useEffect(() => {
    console.log('useEffect: only first render (componentDidMount)')
    document.title = 'counter: ' + counter
  }, [])

  useEffect(() => {
    console.log('useEffect: every render')
    document.title = 'counter: ' + counter
  }, )

  useEffect(() => {
    console.log('useEffect: first render and every counter change')
    document.title = 'counter: ' + counter
  }, [counter])

  return <>
    Hello, {counter}---{fake}
    <br/>
    <button onClick={() => setCounter(counter => ++counter)}>
      INC Counter
    </button>
    <button onClick={() => setFake(fake => ++fake)}>
      INC Fake
    </button>
  </>
}

export const SetTimeoutExample = () => {
  console.log('SetTimeoutExample')
  const [counter, setCounter] = useState(1)
  const [fake, setFake] = useState(1)

  useEffect(() => {
    console.log('useEffect')
    setTimeout(() => {
      console.log('run setTimeout')
      document.title = 'counter: ' + counter
    }, 1000)
  }, [counter])


  return <>
    Hello, {counter}---{fake}
    <br/>
    <button onClick={() => setCounter(counter => ++counter)}>
      INC Counter
    </button>
    <button onClick={() => setFake(fake => ++fake)}>
      INC Fake
    </button>
  </>
}

export const SetIntervalExample = () => {
  console.log('SetIntervalExample')
  const [counter, setCounter] = useState(1)

  useEffect(() => {
    console.log('useEffect')
    setInterval(() => {
      console.log('tick ', counter)
      setCounter(counter => counter + 1)
    }, 1000)
  }, [])


  return <>
    Hello, counter: {counter}
  </>
}