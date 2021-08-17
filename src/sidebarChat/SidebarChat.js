import React from 'react'
import './SidebarChat.css'

const SidebarChat = ({ user, onUserSelect }) => {
  return (
    <div
      className='sidebarChat'
      onClick={(e) => {
        onUserSelect(user._id, user.userName)
      }}
    >
      <div className='sidebar_chatInfo'>
        <h2>{user.userName}</h2>
       </div>
    </div>
  )
}

export default SidebarChat
