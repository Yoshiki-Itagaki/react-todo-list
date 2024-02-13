import React, { useState } from "react";

function Item(props){

    return (
                <div onClick={()=>{
                    props.onChecked(props.id);
                }}>
                    <li>{props.text}</li>
                </div>                  
    )
}

export default Item