import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Sidebar.css'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { Avatar, IconButton } from '@material-ui/core'
import SidebarChat from '../sidebarChat/SidebarChat'
import axios from '../axios'

const Sidebar = ({ onSelect }) => {
  const history = useHistory()
  const [users, setUsers] = useState([])

  async function logOut() {
    try {
      await axios.get(`/users/logout`)
      // await getLoggedIn()
      alert('You Have Successfully Logged Off')
      console.log('logged out')
      history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUsers()
    // eslint-disable-next-line
  }, [])

  const fetchUsers = async () => {
    try {
      await axios.get(`/users/allUsers`).then((res, req) => {
        setUsers(res.data)
        onSelect(res.data[0]._id, res.data[0].userName)
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
            <ExitToAppIcon onClick={logOut} />
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
            <SidebarChat
              key={user.userName}
              user={user}
              onUserSelect={onSelect}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
