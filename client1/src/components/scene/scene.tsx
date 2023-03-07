import React, { useState , useEffect, useRef } from 'react';
import { Canvas, useLoader} from '@react-three/fiber';
import { OrbitControls, Stats, Sky} from '@react-three/drei/core';
import Trees from './Tree_1';
import Trees2 from './Tree_2';
import Trees3 from './Tree_3';
import Trees4 from './Tree_4';
import Rocks from './Rocks_1';
import Character1 from '../characters/Character1';
import Character3 from '../characters/Character3';
import Character2 from '../characters/Character2';
import Character4 from '../characters/Character4';
import Character5 from '../characters/Character5';
import SkyBox from './skybox';
import Plane from './plane';
import { Physics } from '@react-three/cannon'
import City from './city'
import {Player} from '../mainCharacter/Player'


function Scene(props:any) {

  const testing = false;

  return (

<div className='container'>
<Canvas shadows >

  <Sky sunPosition = {[100 ,20 ,100]} />
  <pointLight castShadow intensity={0.7} position={[100, 100, 100]} />
  <directionalLight castShadow />
  
  {/* to show framerate on the side  */}
  {testing ? <Stats/> : null}

  {/* Add axis to help on knowing orientation  */}
  
  {testing ? <axesHelper args = {[2]} /> : null}
  
  {/* this one is to apply grid on the ground  */}
  {testing ? <gridHelper args = {[10, 10]} /> : null}
 
  
  {/* to orbit around in the scene  */}
  {/* <OrbitControls />  */}
  
  <Physics gravity={[0, -30, 0]}>
  <Trees boundary = {200} count= {40}/>
  <Trees2 boundary = {200} count= {80}/>
  <Trees3 boundary = {200} count= {60}/>
  <Trees4 boundary = {200} count= {84}/>
  <Rocks boundary = {100} count= {8}/>
  {/* <SceneTwo /> */}
  {/* <MainCharacter /> */}
  <Player position ={[0,3,0]}/>
  <Character1 openChatWindow={props.openChatWindow}/>
  <Character5 openChatWindow={props.openChatWindow}/>
  <Character4 openChatWindow={props.openChatWindow}/>
  <Character2 />
  <Character3 openChatWindow={props.openChatWindow}/>
  <ambientLight intensity={0.5} />
  <directionalLight position= {[0, 10, 0]} intensity ={1} />
  <Plane position={[0, 0.5, 0]}/>
  
   
   <City />
  </Physics>
  {/* <SkyBox /> */}
</Canvas>

</div>
  );
}

export default Scene;



