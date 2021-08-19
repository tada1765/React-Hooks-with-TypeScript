import React, { useState } from 'react'

export default function UseStateComponent() {
  const [arr, arrSet] = useState<number[]>([])
  const [name, nameSet] = useState<string | null>(null)

  return (
    <div>
      <div>
        <button onClick={() => arrSet([...arr, arr.length + 1])}>
          Add To Array
        </button>
        {JSON.stringify(arr)}
      </div>
      <div>
        <button onClick={() => nameSet("Huh")}>
          Set Name
        </button>
        {JSON.stringify(name)}
      </div>
    </div>
  )
}
