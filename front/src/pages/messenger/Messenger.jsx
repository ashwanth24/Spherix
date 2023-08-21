import React from 'react'
import Conversation from '../../components/conversations/Conversation'
import Message from '../../components/message/Message'
import Topbar from '../../components/topbar/Topbar'
import "./messenger.css"


export default function Messenger() {
  return (
    <>
    <Topbar/>
    <div className="messenger">
        <div className="chatMenu">
           <div className="chatMenuWrapper">
            <input placeholder='Search...' className="chatMenuInput" />
            <Conversation/>
            <Conversation/>
            <Conversation/>
            <Conversation/>

           </div>
        </div>
        <div className="chatBox">
            <div className="chatBoxWrapper">
                <div className="chatBoxTop">
                  <Message/>
                  <Message own={true}/>
                  <Message/>
                  <Message/>
                  <Message/>
                  <Message/>
                  <Message own={true}/>
                  <Message/>
                  <Message/>
                  <Message/>
                  <Message/>
                  <Message own={true}/>
                  <Message/>
                  <Message/>
                  <Message/>
                  <Message/>
                  <Message own={true}/>
                  <Message/>
                  <Message/>
                  <Message/>
                </div>
              <div className="chatBoxBottom">
                <textarea className="chatMessageInput" id="" cols="30" rows=""></textarea>
                <button className='chatSubmitBottom'>send</button>
              </div>
            </div>
        </div>
        <div className="chatOnline">
            <div className="chatOnlineWrapper">
                oW
            </div>
        </div>
    </div>
    </>
  )
}
