import React from 'react'
import "../css/Complete.css"
import HeaderComponent from './HeaderComponent'
import ConversationContainer from './ConversationContainer'

export default function ChatBox() {
  return (
    <div className='ChatBoxContainer d-flex flex-column '>
        <HeaderComponent headContent={"Myty ChatBot"}/>
        <ConversationContainer/>
    </div>
  )
}
