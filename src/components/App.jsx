import React, {useState} from "react";
import Item from "./Item";

function App() {

  const [item, setItem] = useState("");
  const [rows, setRows] = useState([]);

  function handleChange(event){
    const value = event.target.value;
    setItem(value);
  }

  function addItem(){
    setRows(rows=>[...rows, item]);
  }

  function deleteItem(id){
    console.log(id);
    setRows(prevItems=> prevItems.filter(
      (item, index) => index !==id
    ))
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
        onClick={addItem}
        >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {rows.map((row, index) =>
          <Item key={index} id={index} text={row} onChecked={deleteItem}></Item>      
        )}
        </ul>
      </div>
    </div>
  );
}

export default App;
