import React, { useState } from 'react';
import { Physics } from '@react-three/cannon';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import MainCharacter from '../character/main-character';
import Character1 from '../character/character1';
import Plane from '../plane/plane';
import ChatWindow from '../chatWindow/chatWindow';
import './style.css';


function Scene(props) {
  // console.log(props)
  // const [showChat, setShowChat] = useState(false);

  // const openChatWindow = () => {
  //   setShowChat(true);
  // }

  // props.showChat()

  return (
    <Canvas>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Physics>
        <MainCharacter />
        <Character1 openChatWindow={props.openChatWindow}/> 
        <Plane />
        </Physics>
    </Canvas>
  );
}

export default Scene;