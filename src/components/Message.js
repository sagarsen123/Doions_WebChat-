import React from 'react'
import "../css/Complete.css"

export default function Message(props) {

    // const messageRightClass = {
    //     height : "1rem",
    //     display:"block",
    //     backgroundColor: "#D9D9D9",
    //     borderRadius: "42px 8px 32px 42px",
    //     padding: "1.5rem",
    //     position:"absolute",
    //     right:"0px",
    //     clear:"both"
    // }  
    
  return (
    <div className={`d-flex f-column justify-content-center align-items-center ${props.fsend}`} > 
    {props.text}</div>
  )
}
