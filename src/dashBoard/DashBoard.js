import React, { useState,  useContext } from 'react'
import Chat from '../chat/Chat'
import Sidebar from '../sidebar/Sidebar'
import './DashBoard.css'
import AuthContext from '../auth/AuthContext'

const DashBoard = () => {
  // const { getLoggedIn } = useContext(AuthContext)
  
  const [selecteduser, setSelecteduser] = useState(null)
  const [selecteduserName, setSelecteduserName] = useState(null)
  console.log(selecteduser)

  const changeUser = (userId,userName) => {
    setSelecteduser(userId);
    setSelecteduserName(userName);
  }

  return (
    <div className='App'>
      <div className='app_body'>
        <Sidebar onSelect={changeUser} />
        <Chat selecteduser={selecteduser} selecteduserName={selecteduserName} />
      </div>
    </div>
  )
}

export default DashBoard
