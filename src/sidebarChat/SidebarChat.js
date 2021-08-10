import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'

const SidebarChat = ({user}) => {
 return (
  <div className='sidebarChat'>
   <Avatar/>
   <div className="sidebar_chatInfo">
    <h2>{user.userName}</h2>
    <p>{user._id}</p>
   </div>
   
  </div>
 )
}

export default SidebarChat
