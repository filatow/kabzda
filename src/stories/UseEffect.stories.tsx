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