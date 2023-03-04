import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import AnimatedBox from './components/AnimatedBox';
import './App.css';
import { OrbitControls, Stats } from '@react-three/drei/core';
import Rover_1 from './components/scene/Rover_1'


function App() {


  const testing = true;

  return (

    <div className="container">
      <Canvas>

        {/* to show framerate on the side  */}
        {testing ? <Stats/> : null}

        {/* Add axis to help on knowing orientation  */}
        
        {testing ? <axesHelper args = {[2]} /> : null}
        
        {/* this one is to apply grid on the ground  */}
        {testing ? <gridHelper args = {[10, 10]} /> : null}
       
        
        {/* to orbit around in the scene  */}
        <OrbitControls /> 
        
        <Rover_1 />
        <ambientLight intensity={0.1} />
        <directionalLight position= {[0, 0, 5]} />
        <AnimatedBox />
      </Canvas>

    </div>
  );
}

export default App;
