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
      <Scene />
      </div>
      <div className='absolute w-full h-height right-0 top-0 z-20 opacity-90'>
      <ChatWindow />
      
      {/* <ChatWindow /> */}
      </div>
      {/* {showChat && (
      <ChatWindow closeChatWindow={closeChatWindow} />
            )} */}

    </div>
  );
}

export default App;
    