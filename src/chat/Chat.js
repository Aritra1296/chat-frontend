import { Avatar, Button, IconButton } from '@material-ui/core'
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'
import './Chat.css'
import React, { useState, useEffect, useContext } from 'react'
import Pusher from 'pusher-js'
import axios from '../axios'
import moment from 'moment'
import AuthContext from '../auth/AuthContext'

const Chat = ({ selecteduser, selecteduserName }) => {
  const { loginUserID } = useContext(AuthContext)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  console.log(loginUserID)

  const sendMessage = (e) => {
    e.preventDefault()

    axios.post('/messages/new', {
      message: input,
      senderId: selecteduser,
      receiverId: loginUserID,
    })
    setInput('')
  }

  useEffect(() => {
    axios.get('/messages/all').then((res, req) => {
      setMessages(res.data)
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

  return (
    <div className='chat'>
      <div className='chat_header'>
        <Avatar src='https://www.denofgeek.com/wp-content/uploads/2021/07/henry-cavill-man-of-steel-superman-warner.jpg?resize=768%2C432' />
        <div className='chat_header_info'>
          <h2>{selecteduserName}</h2>
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
          <p
            className={`chat_message ${
              message.senderId === 'AritraId' && 'chat_receiver'
            }`}
          >
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
