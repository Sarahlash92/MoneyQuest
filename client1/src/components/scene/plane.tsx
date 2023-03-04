import { useHelper } from '@react-three/drei';
import { DirectionalLightHelper} from 'three';
import React, { useRef } from 'react';
import { Canvas, useThree, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader, Mesh, MeshBasicMaterial } from 'three';
import * as THREE from 'three'; 


const Plane = () => {

  const lightRef = useRef<THREE.DirectionalLight>();

  const texture = useLoader(THREE.TextureLoader, './models/skybox/indigo_dn_1.jpg')

  return (

  <mesh rotation-x = {Math.PI * -0.5 }>
    <directionalLight position={[0, 0, 5]} color="red" />
    <planeBufferGeometry args= {[500, 500]}/>
    <meshBasicMaterial map = {texture}  />
  </mesh>
  )

}

export default Plane