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

    <div className='container mx-auto'>

      {/* <Scene />
      
      */}
      <div className='flex'>
      <Scene />
      <ChatWindow />
      </div>
      {/* {showChat && (
      <ChatWindow closeChatWindow={closeChatWindow} />
            )} */}

    </div>
  );
}

export default App;
     