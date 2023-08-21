import { color } from '@mui/system'
import React from 'react'
import "./message.css"

export default function Message({own}) {
  return (
    <div className={own?"message own" : "message"}>
        <div className="messageTop">
            <div className="box">{/*<img src="p.png" alt="img" className="messageImg" />*/ }</div>
            <p className="messageText">hello this is msg</p>
        </div>
            <div className="messageBottom">1hr ago</div>
    </div>
  )
}
