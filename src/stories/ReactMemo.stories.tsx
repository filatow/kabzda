import React, {useState} from 'react';

export default {
  title: 'React.memo'
}

const NewMessagesCounter = (props: { count: number }) => {
  console.log('render NewMessagesCounter')

  return <div>{props.count}</div>
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

export const Example1 = () => {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState(['Dimych', 'Valera', 'Sveta'])

  const addUser = () => {
    setUsers([...users, 'Nadya ' + new Date().getTime()])
  }

  return <>
    <button onClick={() => setCount(count + 1)}>+</button>
    <button onClick={() => addUser()}>add user</button>
    <NewMessagesCounter count={count}/>
    <Users users={users}/>
  </>
}