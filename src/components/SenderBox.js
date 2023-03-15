import React from 'react'
import "../css/Complete.css"
import UnseeenMess from './UnseenMessage.js'

export default function SenderBox(props) {
  return (
    <div className="SenderContainer" >
      <div className="imageContainer">
        <img src={props.Img} className="imgClass" alt="" />
      </div>
      <div className="senderDetails">
        <div className="senderName">{props.senderName}</div>
            <div className="messIcon"><UnseeenMess messCount={6}/></div>
      </div>
    </div>
  )
}
