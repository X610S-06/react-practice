import React, {useState} from "react";

import "./style.css";

export default function App() {

  const [text, setText] = useState()
  const [lists, setLists] = useState([])

  const handleChange = (e) => {
    e.preventDefault() 
    const data = e.target.value
    setText(data)
  }

  const arr=[]

  const handleSubmit = (e) => {
    e.preventDefault() 
    arr.push(text)
    console.log(arr)
    setLists([...arr]) 
  }

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
        <input type='text'  onChange={handleChange}/>
        <button onClick={handleSubmit}>Add</button>
        <ul>
        {lists.map(item =>{
          <li>{item}</li>
        })}
        </ul>
    </div>
  );
}
