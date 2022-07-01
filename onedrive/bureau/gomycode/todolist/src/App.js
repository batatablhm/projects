
import './App.css';
import React, { useState, useRef } from "react";

function App() {
  let writting;
  const inputRef=useRef(null);
  const [list,setList]=useState([])

  
  return (
    <div>
      <input
       type="text"
       placeholder="add your list"
       size="34"  
       onChange={(e)=>{
         writting=e.target.value;
       }}
        ref={inputRef}
      />
      <button onClick={(e)=>{setList([...list,writting]);  inputRef.current.value=""}}> add</button>
      <button > delete</button>
      
      <ul>
       {
        list.map((todo,index) => <li key={"lis"+index}>{todo}</li>)
       }
      </ul>
    </div>
  );
  }
export default App;
