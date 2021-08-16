import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'

const SidebarChat = ({ user, onUserSelect }) => {
  return (
    <div
      className='sidebarChat'
      onClick={(e) => {
        onUserSelect(user._id)
      }}
    >
      <Avatar />
      <div className='sidebar_chatInfo'>
        <h2>{user.userName}</h2>
        <p>{user._id}</p>
      </div>
    </div>
  )
}

export default SidebarChat
