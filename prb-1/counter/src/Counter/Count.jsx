import React, { useState } from 'react';

const Count =()=>{
    const [state,setState]=useState(0)

    return(
        <>
        <h1>Counter</h1>
        <h3>Count:-{state}</h3>
        <button onClick={()=>setState(state+1)}>Add</button>
        <button onClick={()=>setState(state>0?state-1:0)}>Delete</button>
        </>

    )
}
export default Count;