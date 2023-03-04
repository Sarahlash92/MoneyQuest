import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';
import { useHelper } from '@react-three/drei';
import { BoxHelper } from 'three';


const AnimatedBox = () => {

  const meshRef = useRef<THREE.Mesh>(null);

  // useHelper( meshRef, BoxHelper, "blue");

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
    }
  });

  return (
    <mesh ref = {meshRef} scale = {[0.5, 0.5, 0.5]} >
      <boxGeometry />
      <meshStandardMaterial /> 
    </mesh> 
  )
};

export default AnimatedBox;