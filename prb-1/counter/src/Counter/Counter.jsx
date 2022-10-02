import React,{useState} from 'react'

const Counter = () => {
    const [counter,setCounter]=useState(0)

    const handleInc= () =>{ setCounter(counter+1)}
  return (
    <div>
        <h1>COUNT :- {counter}</h1>
        <button style={{backgroundColor:"green"}}onClick={handleInc}>INC</button>
        <button style={{backgroundColor:"orange"}}onClick={()=>setCounter(counter>0?counter-1:0)}>DEC</button>
    
    </div>
  )
}

export default Counter