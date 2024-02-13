import React, {useState} from "react";

function InputArea(props){

    const [itemLine, setItemLine] = useState("");

    function handleChange(event){
        const value = event.target.value;
        setItemLine(value);
    }

   return (
    <div className="form">
        <input 
            type="text"
            value={itemLine}
            onChange={handleChange}
        />
        <button onClick={() =>{
            props.onAdd(itemLine)
            setItemLine("");
        }}>
          <span>Add</span>
        </button>
      </div>
   )
          
}

export default InputArea