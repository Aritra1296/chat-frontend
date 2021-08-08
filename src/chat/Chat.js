import { Avatar, Button, IconButton } from '@material-ui/core'
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'
import React from 'react'
import './Chat.css'

const Chat = () => {
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
       <p className='chat_message'>
         <span className='chat_name'>Aritra</span>
         This is message
         <span className='chat_timestamp'>{new Date().toUTCString()}</span>
       </p>
       <p className='chat_message chat_receiver'>
         <span className='chat_name'>Aritra</span>
         This is message
         <span className='chat_timestamp'>{new Date().toUTCString()}</span>
       </p>
       <p className='chat_message'>
         <span className='chat_name'>Aritra</span>
         This is message
         <span className='chat_timestamp'>{new Date().toUTCString()}</span>
       </p>
     </div>

     <div className="chat_footer">
      <InsertEmoticonIcon/>
      <form >
       <input placeholder='Type a message' type="text" />
       <Button type='submit'>
        Send a Message
       </Button>
      </form>
      <MicIcon/>
     </div>
   </div>
 )
}

export default Chat
