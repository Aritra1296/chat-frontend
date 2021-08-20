import React, { useState, useContext ,useEffect} from 'react'
import Chat from '../chat/Chat'
import Sidebar from '../sidebar/Sidebar'
import './DashBoard.css'
import AuthContext from '../auth/AuthContext'

const DashBoard = () => {
  const { getLoggedIn, loginUserID } = useContext(AuthContext)
  const [selecteduser, setSelecteduser] = useState(null)
  const [selecteduserName, setSelecteduserName] = useState(null)

  const changeUser = (userId,userName) => {
    setSelecteduser(userId);
    setSelecteduserName(userName);
  }
useEffect(() => {
  getLoggedIn()
}, [loginUserID])

  return (
    <div className='dashboard_App'>
      <div className='dashboard_app_body'>
        <Sidebar onSelect={changeUser} />
        <Chat selecteduser={selecteduser} selecteduserName={selecteduserName} />
      </div>
    </div>
  )
}

export default DashBoard
