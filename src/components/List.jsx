import React, { useState } from "react";

function List(content){

    const [isDone, setIsDone] = useState(false);

    function handleClick(){
        console.log('clicked');
        console.log(isDone);
        setIsDone(!isDone);
        console.log(isDone);

    }

    return (
        <div>
        <ul>
            {/* <li>{content.rows}</li> */
                content.rows.map(
                    row=>
                        <li onClick={handleClick} 
                        style = {{ textDecoration :   isDone ? "line-through" : "white" }}>
                            {row}
                        </li>
                )          
            }
        </ul>
    </div>
        
    )
}

export default List