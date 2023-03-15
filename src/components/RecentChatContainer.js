import React, { useState } from 'react'
import SenderBox from './SenderBox'
import img from "../images/userDp.png";

export default function RecentChatContainer() {
  const [allChats,setAllChats] = useState([]);
  const updateSenderList = ()=>{
        setAllChats([{Img:img,senderName:"Rahul Roy" + Math.floor(Math.random()*10)},...allChats]);
  }

  return (
    <div className="RecentChatContainer" > {
        allChats.map(
          (element) => {
              return <SenderBox Img={element.Img}
               senderName={element.senderName} />
          }
        )
    }
        {/* <button className="btn btn-primary" onClick={updateSenderList}>
           Add User
        </button> */}
      </div>
  )
}
