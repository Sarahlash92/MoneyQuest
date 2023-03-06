import React, { useEffect, useState } from 'react';


import Form from './form';
import Head from './chathead'
import Messages from './messeges';
import closeIcon from './closeIcon.svg'

const CloseIconX =(props:any) => {
  
  return (

    <img src={closeIcon} {...props} />

  )
}

const ChatWindow = (props:any) => {
  
  const [message, setMessages] = useState([]);
  

  return (
    
    <div className ="h-[32rem] w-full bg-[#2F343C] rounded-1xl p-2 shadow-lg w-1/4 opacity-90">
    <div className='flex justify-end items-center'>
      <button onClick= {props.closeChatWindow} className='bg-white hover:opacity-50 active:opacite-100 transition-colors p-0 rounded-full'>
        <CloseIconX className ='w-10 h-10 fill-white m-0 p-0'/>
  </button>
</div>

      <Head />
      <div className='w-full h-[1px] my-8 bg-[#4F5361]'/>
      <Messages messages={message}/>
      <div className='w-full h-[1px] my-8 bg-[#4F5361]'/>
      <Form  setMessages={setMessages}/> 

    </div>
  )
}

export default ChatWindow
