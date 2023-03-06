import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import ChatWindow from './components/chatWindow/chatWindow';
import Scene from './components/scene/scene';


function App() {

  const [showChat, setShowChat] = useState(false);


  const openChatWindow = () => {
    setShowChat(true);
  };

  const closeChatWindow = () => {
    setShowChat(false);
  };

  return (

    <div className='relative container mx-auto'>

      {/* <Scene />
      
      */}
      <div className='absolute w-full h-height z-10'>
      <Scene openChatWindow={openChatWindow}/>
      </div>

      {showChat &&  <div className='absolute w-1/4 h-height right-0 top-0 z-20 opacity-90'>
      <ChatWindow closeChatWindow={closeChatWindow} /> </div>}
    
      {/* <ChatWindow /> */}
      
      {/* {showChat && (
      <ChatWindow closeChatWindow={closeChatWindow} />
            )} */}

    </div>
  );
}

export default App;
    