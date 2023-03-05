import React, { useEffect, useState } from 'react';


import Form from './form';
import Head from './chathead'
import Messages from './messeges';


function ChatWindow() {
  
  const [message, setMessages] = useState([]);
  

  return (
    
    <div className ="bg-[#2F343C] rounded-3xl p-12">
      
      <Head />
      <div className='w-full h-[1px] my-8 bg-[#4F5361]'/>
      <Messages messages={message}/>
      <div className='w-full h-[1px] my-8 bg-[#4F5361]'/>
      <Form  setMessages={setMessages}/> 

    </div>
  )
}

export default ChatWindow
