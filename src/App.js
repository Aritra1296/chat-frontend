import React, {useState, useEffect } from 'react'
import './App.css'
import Chat from './chat/Chat'
import Sidebar from './sidebar/Sidebar'
import Pusher from 'pusher-js'

function App() {
  useEffect(() => {
    const pusher = new Pusher('28527e97292ee45133a6', {
      cluster: 'ap2',
    })
    const channel = pusher.subscribe('messages')
    channel.bind('inserted', function (data) {
      alert(JSON.stringify(data))
    })
  }, [])

  return (
    <div className='App'>
      <div className='app_body'>
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}

export default App
