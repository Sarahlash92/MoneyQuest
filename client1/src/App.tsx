import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Scene from './components/scene/scene';
import ChatWindow from './components/chatWindow/chatWindow';



function App() {


  const [showChat, setShowChat] = useState(false);


  const openChatWindow = () => {
    setShowChat(true);
  };

  const closeChatWindow = () => {
    setShowChat(false);
  };

  return (

    <div className="container">
      <Scene openChatWindow= {openChatWindow}/>
      {showChat && (
              <ChatWindow closeChatWindow={closeChatWindow} />
            )}

    </div>
  );
}

export default App;


      {/* <Scene  /> */}
     