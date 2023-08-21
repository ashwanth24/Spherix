import { Chat, Person, Search,Notifications } from "@mui/icons-material"
import { useContext } from "react"
import "./topbar.css"
import {AuthContext} from "../../context/AuthContext"
import { Link } from "@mui/material"




export default function Topbar() {
  const {user} =useContext(AuthContext)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">LuxeVerse</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon"/>
          <input placeholder="search" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight"> 
      <div className="topbarlinks">
        <span className="topbarLink">home</span>
        <span className="topbarLink">timeline</span>
        </div> 
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications/>
            <span className="topbarIconBadge">1</span>
          </div>
          </div>
         <Link to ={`profile/${user.username}`} >
         <img src= {user.profilePicture ||PF+"person/noAv.webp"} alt="" className="topbarImg" />
         </Link>
      </div>
    </div>
  )
}
