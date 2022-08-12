import React,{useState} from 'react';
import './App.css';
import Counter from './Counter/Counter';

function App() {
  const [showCounter,setShowCounter]=useState(true);
  return (
    <div className="App">
      <h1 style={{color:"blue"}}>Counter-App</h1>
      <button style={{backgroundColor:"purple",color:"white"}}onClick={()=>setShowCounter(!showCounter)}>
        {showCounter ? "Hide The Counter" : "Show The Counter"}
      </button>
      {showCounter && <Counter />}

    </div>
  );
}

export default App;
