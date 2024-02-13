import React, {useState} from "react";
import List from "./List";

function App() {

  const [item, setItem] = useState("");
  const [rows, setRows] = useState([]);

  function handleChange(event){
    const value = event.target.value;
    setItem(value);
  }

  function handleClick(){
    setRows(rows=>[...rows, item]);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input 
        type="text"
        onChange={handleChange} />
        <button
        onClick={handleClick}
        >
          <span>Add</span>
        </button>
      </div>
      <List rows = {rows} />
    </div>
  );
}

export default App;
