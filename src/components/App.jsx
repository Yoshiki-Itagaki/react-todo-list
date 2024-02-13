import React, {useState} from "react";
import Item from "./Item";
import InputArea from "./InputArea"

function App() {

  const [rows, setRows] = useState([]);  

  function addItem(itemLine){
    setRows(rows=>[...rows, itemLine]);
  }

  function deleteItem(id){
    console.log(id);
    setRows(prevItems=> prevItems.filter(
      (itemLine, index) => index !==id
    ))
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
     
        <InputArea
          onAdd = {addItem}
        />
       
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
