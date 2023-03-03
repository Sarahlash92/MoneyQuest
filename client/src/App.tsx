import React , { useState } from 'react';
import './App.css';
import Scene from './components/scene/scene';
import ChatWindow from './components/chatWindow/chatWindow';


function App() {

  // const [showChat, setShowChat] = useState(false);

  // const openChatWindow = () => {
  //   setShowChat(true);
  // };

  // const closeChatWindow = () => {
  //   setShowChat(false);
  // };

  // const [messages, setMessages] = useState([]);

  // const addMessage = (text, sender) => {
  //   setMessages([...messages, { text, sender }]);
  // };


  return (
<div className="container">
      <Scene />
      {/* <Scene openChatWindow={openChatWindow} /> */}
      {/* {showChat && (
        <ChatWindow messages={messages} addMessage={addMessage} closeChatWindow={closeChatWindow} />
      )} */}
    </div>
  );
}

export default App;
