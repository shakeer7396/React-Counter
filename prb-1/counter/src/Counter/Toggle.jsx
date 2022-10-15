import React, { useState } from 'react'
import Count from './Count'

const Toggle = () => {
    const[toggle,setToggle]=useState(true)

  return (
    <div>
        <button onClick={()=>setToggle(!toggle)}>{toggle ? "Hide The Counter" : "Show The Counter"}</button>
        {toggle && <Count />}
    </div>
  )
}

export default Toggle;

