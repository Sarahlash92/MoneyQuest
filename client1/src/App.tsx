import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import AnimatedBox from './components/AnimatedBox';
import './App.css';
import { OrbitControls, Stats } from '@react-three/drei/core';
import Trees from './components/scene/Tree_1'
import Trees2 from './components/scene/Tree_2';
import Trees3 from './components/scene/Tree_3';
import Trees4 from './components/scene/Tree_4';
import MainCharacter from './components/mainCharacter/MainCharacter'
import Character1 from './components/characters/Character1';
import Character2 from './components/characters/Character2';
import SkyBox from './components/scene/skybox';
import Plane from './components/scene/plane';



function App() {

  const testing = true;

  return (

    <div className="container">
      <Canvas shadows >

        {/* to show framerate on the side  */}
        {testing ? <Stats/> : null}

        {/* Add axis to help on knowing orientation  */}
        
        {testing ? <axesHelper args = {[2]} /> : null}
        
        {/* this one is to apply grid on the ground  */}
        {testing ? <gridHelper args = {[10, 10]} /> : null}
       
        
        {/* to orbit around in the scene  */}
        <OrbitControls /> 
        
        <Trees boundary = {200} count= {40}/>
        <Trees2 boundary = {200} count= {80}/>
        <Trees3 boundary = {200} count= {60}/>
        <Trees4 boundary = {200} count= {84}/>

        <MainCharacter />
        <Character1 />
        <Character2 />
        <ambientLight intensity={0.5} />
        <directionalLight position= {[0, 10, 0]} intensity ={5} />
        <Plane />
        <SkyBox />
 
        {/* <AnimatedBox /> */}
      </Canvas>

    </div>
  );
}

export default App;
