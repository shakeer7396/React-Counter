import React,{useState} from 'react';
import './App.css';
import Count from './Counter/Count';
import Counter from './Counter/Counter';
import Toggle from './Counter/Toggle';

function App() {
  const [showCounter,setShowCounter]=useState(true);
  return (
    <div className="App">
      <h1 style={{color:"blue"}}>Counter-App</h1>
      <button style={{backgroundColor:"purple",color:"white"}}onClick={()=>setShowCounter(!showCounter)}>
        {showCounter ? "Hide The Counter" : "Show The Counter"}
      </button>
      {showCounter && <Counter />}

      {/* <Count /> */}
      <Toggle />

    </div>
  );
}

export default App;
