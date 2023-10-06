import {useState} from 'react'
import './App.css'
export default function App() {
  const [count,setCount] = useState(0);
  function Increment(){
    setCount(prevCount=>prevCount+1);
  }
  function Decrement(){
    
        setCount(prevCount=>prevCount-1);
     
  }
  function Reset()
  {
    setCount(0);
  }
  return (
    <div className='App'>
      <h1>MY COUNTER APP</h1>
      <p className='count'>{count}</p>
      <button onClick={Increment} className='In'>Increment</button>
      <button onClick={Reset} className='Re'>Reset</button>
      <button onClick={Decrement} className='De'>Decrement</button>
    </div>
  )
}
