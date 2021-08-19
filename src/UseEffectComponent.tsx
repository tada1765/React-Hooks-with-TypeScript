import React, { useEffect, useState } from 'react'

export default function UseEffectComponent() {
  const [val , valSet] = useState(1);
  
  useEffect(() => {
    const timer = window.setInterval(() =>{
      valSet((v) => v+1)
    },1000)
    return () => window.clearInterval(timer)
  },[])
  
  return (
    <div>
      {val}
    </div>
  )
}
