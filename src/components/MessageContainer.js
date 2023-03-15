import React from 'react'
import "../css/Complete.css"
import Message from './Message'

export default function MessageContainer() {
  return (
    <div className='MessageContainer'>
      <Message fsend={"left"} text={"Hello Hi How Are You?"}/>
      <Message fsend={"right"} text={"I am fine How About You...?"}/>
      
      </div>
  )
}
