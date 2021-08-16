import React, { useState,  useContext } from 'react'
import Chat from '../chat/Chat'
import Sidebar from '../sidebar/Sidebar'
import './DashBoard.css'
import AuthContext from '../auth/AuthContext'

const DashBoard = () => {
  const { getLoggedIn } = useContext(AuthContext)
  const [selecteduser, setSelecteduser] = useState(null)
  console.log(selecteduser)



  const changeUser = (userId) => {
    setSelecteduser(userId)
  }

  return (
    <div className='App'>
      <div className='app_body'>
        <Sidebar onSelect={changeUser} />
        <Chat selecteduser={selecteduser} />
      </div>
    </div>
  )
}

export default DashBoard
