import React, {
  // useMemo,
  useState
} from 'react'

export default {
  title: 'useState'
}


function generate() {
  console.log('generate')
  return 83423132314
}

export const Example1 = () => {
  console.log('Example1')
  // ---- variant 1
  // const initialValue = useMemo(generate, [])
  // const [count, setCount] = useState(initialValue)
  // ---- variant 2
  const [count, setCount] = useState(generate)

  const handleClick = () => {
    setCount(count => count + 1)
  }


  return <>
    <button onClick={handleClick}>+</button>
    <div>{count}</div>
  </>
}
