import React from 'react'
import MessageContainer from './MessageContainer'
import SendMessageContainer from './SendMessageContainer'

export default function ConversationContainer() {
  return (
    <div className='ConversationContainer'>
      <MessageContainer/>
      <SendMessageContainer/>
    </div>
  )
}
