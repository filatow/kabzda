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
    const timeoutId = setTimeout(() => {
      console.log('run setTimeout')
      document.title = 'counter: ' + counter

      return () => {
        clearTimeout(timeoutId)
      }
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

export const ResetEffectExample = () => {
  console.log('ResetEffectExample')
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('useEffect occurred')

    return () => {
      console.log('EFFECT RESET')
    }
  }, [counter])


  return <>
    Hello, counter: {counter}
    <hr/>
    <button onClick={() => setCounter(counter => ++counter)}>
      INC Counter
    </button>
  </>
}

export const KeysTrackerExample = () => {
  const [text, setText] = useState('')
  console.log('Component rendered with text: ', text)

  const handler = (e: KeyboardEvent) => {
    console.log(e.key)
    setText(text => text + e.key)
  }

  useEffect(() => {
    window.document.addEventListener('keypress', handler)

    return () => {
      console.log('cleanUp')
      window.document.removeEventListener('keypress', handler)
    }
  }, [])


  return <>
    Typed text: {text}
  </>
}


export const SetTimeoutExample2 = () => {
  const [text, setText] = useState('')
  console.log('Component rendered with text: ', text)


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log('TIMEOUT EXPIRED')
      setText('3 SEC TIMEOUT')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [text])


  return <>
    Typed text: {text}
  </>
}
