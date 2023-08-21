import { RssFeed, School,Event, WorkOutline, HelpOutline, Group, Bookmark, PlayCircleFilledOutlined, Chat } from '@mui/icons-material'
import React from 'react'
import "./sidebar.css"
import {Users} from "../../dummyData"
import CloseFriend from "../closeFriend/CloseFriend"

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className='sidebarIcon'/>
            <span className="sidebarListItem">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className='sidebarIcon'/>
            <span className="sidebarListItem">Chat</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className='sidebarIcon'/>
            <span className="sidebarListItem">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Group className='sidebarIcon'/>
            <span className="sidebarListItem">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className='sidebarIcon'/>
            <span className="sidebarListItem">Feed</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className='sidebarIcon'/>
            <span className="sidebarListItem">Feed</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className='sidebarIcon'/>
            <span className="sidebarListItem">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Event className='sidebarIcon'/>
            <span className="sidebarListItem">Feed</span>
          </li>
          <li className="sidebarListItem">
            <School className='sidebarIcon'/>
            <span className="sidebarListItem">Feed</span>
          </li>
        </ul>
        <button className="sidebarButton">show more</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map(u=>(
              //< key={u.id} user={u} />
              <CloseFriend key={u.id} user={u}/>
              ))}

        </ul>
        </div>
    </div>
  )
}
