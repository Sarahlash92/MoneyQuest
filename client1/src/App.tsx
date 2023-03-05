import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import ChatWindow from './components/chatWindow/chatWindow';
import Scene from './components/scene/scene';


function App() {


  // const [investment, setInvestment] = useState(0);
  // const [gameState, setGameState] = useState<"not_started" | "in_progress" | "finished">(
  //   "not_started"
  // );
  // const [gameResult, setGameResult] = useState<boolean | null>(null);

  // const startGame = () => {
  //   setGameState("in_progress");
  //   setGameResult(null);
  // };

  // const guessAnswer = (answer: boolean) => {
  //   const random = Math.random() < 0.5 ? true : false;
  //   const result = answer === random;
  //   const investmentAmount = result ? investment * 2 : 0;

  //   setInvestment((prev) => prev + investmentAmount);
  //   setGameResult(result);
  //   setGameState("finished");
  // };

  // const [showChat, setShowChat] = useState(false);


  // const openChatWindow = () => {
  //   setShowChat(true);
  // };

  // const closeChatWindow = () => {
  //   setShowChat(false);
  // };

  return (

    <div className="container" >
            {/* <Game
        startGame={startGame}
        guessAnswer={guessAnswer}
        investment={investment}
        gameState={gameState}
        gameResult={gameResult}
      /> */}
      {/* <Scene />
      
      */}
      <ChatWindow />
      {/* <Scene openChatWindow= {openChatWindow}/>
      {showChat && (
              <ChatWindow closeChatWindow={closeChatWindow} />
            )} */}

    </div>
  );
}

export default App;
     