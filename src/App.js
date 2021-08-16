import React from 'react'
import './App.css'
// import Chat from './chat/Chat'
// import Sidebar from './sidebar/Sidebar'
import Login from './login/Login'
import Signup from './signup/Signup'

function App() {
  return (
    <div className='App'>
      <div className='app_body'>
        {/* <Sidebar />
        <Chat /> */}
        {/* <Login/> */}
        <Signup/>
      </div>
    </div>
  )
}

export default App
