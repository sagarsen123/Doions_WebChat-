import React from 'react'
import ChatBox from "../components/ChatBox"
import SenderContainerBox from "./SenderContainerBox"
import Divider from './Divider'
import "../css/Complete.css"

export default function ChatApp() {
  return (
    <div className='ChatAppContainer d-flex flex-row'>
            <SenderContainerBox/>
            <Divider />
            <ChatBox/>

    </div>
  )
}
