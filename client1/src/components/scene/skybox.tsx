import React, { useRef } from 'react';
import {  useFrame } from '@react-three/fiber';
import { TextureLoader, Mesh, MeshBasicMaterial } from 'three';

function SkyBox() {
  const skyboxRef = useRef<Mesh>();

  const textureLoader = new TextureLoader();
  const texture_rt = textureLoader.load('./models/skybox/indigo_rt.jpg');
  const texture_bk = textureLoader.load('./models/skybox/indigo_bk.jpg');
  const texture_ft = textureLoader.load('./models/skybox/indigo_ft.jpg');
  const texture_dn = textureLoader.load('./models/skybox/indigo_lf.jpg');
  const texture_lf = textureLoader.load('./models/skybox/indigo_dn.jpg');
  const texture_up = textureLoader.load('./models/skybox/indigo_up.jpg');
  


  const materialArray = [
    new MeshBasicMaterial({ map: texture_bk }),
    new MeshBasicMaterial({ map: texture_dn }),
    new MeshBasicMaterial({ map: texture_up }),
    new MeshBasicMaterial({ map: texture_lf }),
    new MeshBasicMaterial({ map: texture_rt }),
    new MeshBasicMaterial({ map: texture_ft }),
    
  ];

  materialArray.forEach((material) => {
    material.side = 2; // BackSide in Three.js is equivalent to 2 in React Three Fiber
  });


  useFrame(() => {
    
    if (skyboxRef.current) {
      skyboxRef.current.rotation.y += 0.001;

    }});

  return (
    // <Mesh ref={skyboxRef} material={materialArray}>
    //   <boxGeometry args={[100000, 100000, 100000]} />
    //   {materialArray.map((material, index) => (
    //     <meshBasicMaterial key={index} attach="material" map={material.map} side={material.side} />
    //   ))}
    // </Mesh>
    <mesh material={materialArray} position = {[0,0,0]}>
      <boxGeometry args={[500, 500, 500]}/>
      {}
    </mesh>
  );
}

export default SkyBox;