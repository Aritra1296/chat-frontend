import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
import { Avatar, IconButton } from '@material-ui/core'
import SidebarChat from '../sidebarChat/SidebarChat'
import axios from '../axios'

const Sidebar = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchUsers()
    // eslint-disable-next-line
  }, [])

  const fetchUsers = async () => {
    try {
      await axios.get(`/users/allUsers`).then((res, req) => {
        setUsers(res.data)
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='sidebar'>
      <div className='sidebar_header'>
        <Avatar src='https://www.denofgeek.com/wp-content/uploads/2021/07/henry-cavill-man-of-steel-superman-warner.jpg?resize=768%2C432' />
        <div className='sidebar_headerRight'>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className='sidebar_search'>
        <div className='sidebar_searchContainer'>
          <SearchOutlinedIcon />
          <input type='text' placeholder='Search or start new chat' />
        </div>
      </div>
      <div className='sidebar_chats'>
       
        {users.map((user, index) => {
          return (
          <SidebarChat key={user.userName} user={user} />
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
