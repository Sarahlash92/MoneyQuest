import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import AnimatedBox from './components/AnimatedBox';
import CameraOrbitController from './components/CameraOrbitControler';
import './App.css';

function App() {



  return (

    <div className="container">
      <Canvas>
        <axesHelper />
        <CameraOrbitController /> 
        <ambientLight intensity={0.1} />
        <directionalLight color= "red" position= {[0, 0, 5]} />
        <AnimatedBox />
      </Canvas>

    </div>
  );
}

export default App;
