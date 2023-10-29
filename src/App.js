import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { actions} from './store/index';
export default function App() {
  const counter= useSelector((state) => state.counter);
  const dispatch= useDispatch();
  const [addbyvalue,setAddByValue]=useState(0);
  // Used to dispatch an action

  // Action is an object with type and payload property
  //WAY 1
//   const increment = ()=>{
// dispatch({type: 'INC'})
//   }
//   const decrement = ()=>{
// dispatch({type: 'DEC'})
//   }
//   const addby = ()=>{
//     const addbyvalue= parseInt(document.getElementsByName('addbyvalue')[0].value);
//     dispatch({type: 'ADDBY', payload: addbyvalue})
//   }
//WAY 2

const increment = ()=>{
  dispatch(actions.increment())
}
const decrement =()=>{
  dispatch(actions.decrement())
}
// const addbyvalue= parseInt(document.getElementsByName('addbyvalue')[0].value)
const addby =()=>{
  dispatch(actions.addby(addbyvalue))
}

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}> INCREMENT</button>
      <button onClick={decrement}> DECREMENT </button>
      <h4>What is the value you want to add in this number: </h4>
      <input type='number' name='addbyvalue' 
      value= {addbyvalue}
      onChange={(e)=>setAddByValue(parseInt(e.target.value))}
      onKeyDown= {(e)=>{if(e.key=== 'Enter'){addby()}}}/>
      {/* <button onClick={addby}> ADD BY: </button> */}
      </div>
  )
}