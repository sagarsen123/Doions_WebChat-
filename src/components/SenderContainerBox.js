import React from 'react'
import "../css/Complete.css"
import HeaderComponent  from './HeaderComponent'

import RecentChatContainer from './RecentChatContainer';


export default function SenderContainerBox() {
  return (
    <div className='SenderContainerBox d-flex flex-column'
    >
      <HeaderComponent headContent={"Chat"}/>
   
      <RecentChatContainer/>
    
    </div>
  )
}
