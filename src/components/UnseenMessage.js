import React, { useState } from 'react'
import "../css/Complete.css"

export default function UnseenMessage(props) {
  const [messCount,setmessCount]=useState(props.messCount);
  const [i,seti] = useState(1);
  const [notificationClass,setNotificationClass]=useState({
    height: "1rem",
    width:"1rem"
  })

  const upDateMessCount = ()=>{
    seti(i=>i+1);
    if(i>9){
      setmessCount("+9");
    }else{
        setmessCount(i); 
    }
    setNotificationClass({
      height:"1.1rem",width:"1.1rem"
    })
    setTimeout(()=>{
      setNotificationClass({height: "1rem",
      width:"1rem"
      })
    },800)
}

  return (
    <div className='uMessContainer'>
    <div className={messCount>0?"uMessage":"noMess"} style={notificationClass}>
        {messCount}
    </div>
    {/* <button className="btn btn-primary btn-sm" onClick={upDateMessCount}>
       click
    </button> */}
</div>
  )
}
