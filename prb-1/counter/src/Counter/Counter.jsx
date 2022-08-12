import React,{useState} from 'react'

const Counter = () => {
    const [counter,setCounter]=useState(0)

    const handleInc= () =>{ setCounter(counter+1)}
    const handleDec= () =>{ setCounter(counter-1)}

   
  return (
    <div>
        <h1>COUNT :- {counter}</h1>
        <button style={{backgroundColor:"green"}}onClick={handleInc}>INC</button>
        <button style={{backgroundColor:"orange"}}onClick={handleDec}>DEC</button>
    
    </div>
  )
}

export default Counter