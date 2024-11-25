import React, {useCallback, useMemo, useState} from 'react'

export default {
  title: 'useMemo'
}

export const ComplexCalculation = () => {
  const [a, setA] = useState<number>(0)
  const [b, setB] = useState<number>(0)

  let factorialB = 1;
  let factorialA;

  factorialA = useMemo(() => {
    let resultA = 1;
    for (let i = 1; i <= a; i++) {
      let fake = 0
      while (fake < 100_000_000) {
        fake++
        Math.random()
      }
      resultA = resultA * i
    }
    return resultA
  }, [a])

  for (let i = 1; i <= b; i++) {
    factorialB = factorialB * i
  }

  return <>
    <input type="number" value={a} onChange={(e) => setA(+e.target.value)}/>
    <input type="number" value={b} onChange={(e) => setB(+e.target.value)}/>
    <hr/>
    <div>Result for A: {factorialA}</div>
    <div>Result for B: {factorialB}</div>
  </>
}

const Users = React.memo(
  (props: { users: Array<string> }) => {
    console.log('render Users')
    return (
      <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
      </div>)
  }
)

export const HelpsToReactMemo = () => {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState(['Dimych', 'Valera', 'Sveta', 'Igor'])

  const filteredUsers = useMemo(() => {
    return users.filter((u) => u.toLowerCase().includes('a'))
  }, [users])

  const addUser = () => {
    setUsers([...users, 'Nadya ' + new Date().getTime()])
  }

  return <>
    <button onClick={() => setCount(count + 1)}>+</button>
    -- {count}
    <hr/>
    <button onClick={() => addUser()}>add user</button>
    <Users users={filteredUsers}/>
  </>
}

type BooksProps = {
  books: string[]
  addBook: () => void
}

const Books = React.memo(
  (props: BooksProps) => {
    console.log('render Books')
    return (
      <div>
        <button onClick={() => props.addBook()}>add book</button>
        {props.books.map((book, i) => {
          return <div key={i}>{book}</div>
        })}
      </div>
    )
  }
)

export const LikeUseCallback = () => {
  const [count, setCount] = useState(0)
  const [books, setBooks] = useState(['React', 'CSS', 'JS', 'HTML'])

  const filteredBooks = useMemo(() => {
    return books.filter((u) => u.toLowerCase().includes('a'))
  }, [books])

  const addBook = () => {
    setBooks([...books, 'Angular ' + new Date().getTime()])
  }

  // const _addBookWrappedWithUseMemo = useMemo(() => addBook, [books])
  const addBookWrappedWithUseCallback = useCallback(addBook, [books])

  return <>
    <button onClick={() => setCount(count + 1)}>+</button>
    -- {count}
    <hr/>
    <Books books={filteredBooks} addBook={addBookWrappedWithUseCallback}/>
  </>
}