import React from 'react'
import sendImg from "../images/Vector.png"
import "../css/Complete.css"

export default function SendMessageContainer() {
  return (
    <div className='SendMessageContainer'>
        <input type="text" />
        <button ><img src={sendImg} alt="" srcset="" /></button>
    </div>
  )
}
