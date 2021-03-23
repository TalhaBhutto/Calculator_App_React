import React from "react";

function Operators(props){
    let target=document.getElementById("myscreen");
    target.value=target.value+props.val;
    return(<button value={props.val}>{props.val}</button>);
}
export default Operators