import React, { useEffect, useState } from 'react';
import './chatWindow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faUserCircle, faCircleXmark } from '@fortawesome/free-solid-svg-icons';




function ChatWindow(props) {

  const [userMessage, setUserMessage] = useState('');
  const [characterMessage, setCharacterMessage] = useState('');

  useEffect (() => {

    fetch('/').then(
      response => response.json()
    ).then(
      data => {
        setCharacterMessage(data)
      }
    )

  }, [])
  
  // const handleSubmit = async (event) => {

  //   event.preventDefault();
  //   if (userMessage.trim()) {
  //     props.addMessage(userMessage, 'user');
  //     setUserMessage('');

  //   // send the msg to the server 
  //   const response = await fetch('/', {
  //     method: 'POST',
  //     header: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ message: userMessage})
  //   });
  //   const data = await response.json();
  //   if (data.success){
  //     props.addMessage(characterMessage, 'character');
  //     setCharacterMessage('');
  //   }
  //   }
  // };

//   const handleClose = () => {
//     props.closeChatWindow();
//   };


  return (
    <div className="chat-window">
     <div className="chat-messages-window">
        <div className="close-window" onClick={handleClose}>
          <FontAwesomeIcon className="close-window-icon" icon={faCircleXmark} />
        </div>
          {props.messages.map((message, index) => (
            
            <div key={index} className={`profile-name-image-text ${message.sender}`}>
              <div className="profile-image">
                <FontAwesomeIcon className="profile-pic" icon={faUserCircle} />
              </div>
              <div className="profile-name-text">
                <div className="profile-name">
                  <p>{message.sender}</p>
                </div>
                <div className="text-message">
                  <p>{message.text}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="chat-input">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type your message here"
            value={userMessage}
            onChange={(event) => setUserMessage(event.target.value)}
          />
          <button>
            <FontAwesomeIcon className="send-icon" icon={faPaperPlane} />
          </button>
        </form>
      </div>
    </div>
  );
}


export default ChatWindow;
