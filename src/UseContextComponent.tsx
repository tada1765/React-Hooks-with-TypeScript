import React, { useContext, useState } from 'react'
import context , { UserState } from './store'

function ConsumerComponent() {
  const user = useContext<UserState>(context)

  return (
    <div>
      <div>First: {user.first}</div>
      <div>Last: {user.last}</div>
    </div>
  )
}

export default function UseContextComponent() {
  const [user, userSet] = useState<UserState>({
    first: "WQ",
    last: "T"
  });

  return (
    <context.Provider value={user}>
      <ConsumerComponent />
      <button onClick={() => userSet({first: "wq", last: "t"})}>
        Change context
      </button>
    </context.Provider>
  )
}
