import React, { useState, useEffect , useRef} from 'react'


export default function TryComponent() {
  const [name, setName] = useState('')
  const prevName = useRef('') 
  
  useEffect(() => { 
    prevName.current = name
  }, [name])
  
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // prevName.current = name
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={e => setName(e.target.value)}/>
        <div>My name is {name} and it used to be {prevName.current}</div>
      </form>
    </>
  )
}
