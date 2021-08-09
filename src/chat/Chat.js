import { Avatar, Button, IconButton } from '@material-ui/core'
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'
import './Chat.css'
import React, { useState, useEffect } from 'react'
import Pusher from 'pusher-js'
import axios from '../axios'
import moment from 'moment'

const Chat = () => {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  const sendMessage = (e) => {
    e.preventDefault()

    axios.post('/messages/new', {
      message: input,
      name: 'Aritra',
      received: false,
    })
    setInput('')
  }

  useEffect(() => {
    axios.get('/messages/all').then((response) => {
      setMessages(response.data)
    })
  }, [])

  useEffect(() => {
    const pusher = new Pusher('28527e97292ee45133a6', {
      cluster: 'ap2',
    })
    const channel = pusher.subscribe('messages')
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage])
    })
    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages])

  console.log(messages)

  return (
    <div className='chat'>
      <div className='chat_header'>
        <Avatar />
        <div className='chat_header_info'>
          <h3>Room name</h3>
          <p>Last Seen at ....</p>
        </div>
        <div className='chat_header_right'>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className='chat_body'>
        {messages.map((message) => (
          <p className={`chat_message ${message.received && 'chat_receiver'}`}>
            <span className='chat_name'>{message.name}</span>
            {message.message}
            <span className='chat_timestamp'>
              {moment(message.timestamp).format('llll')}
            </span>
          </p>
        ))}
      </div>

      <div className='chat_footer'>
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Type a message'
            type='text'
          />
          <Button onClick={sendMessage} type='submit'>
            Send a Message
          </Button>
        </form>
        <MicIcon />
      </div>
    </div>
  )
}

export default Chat
