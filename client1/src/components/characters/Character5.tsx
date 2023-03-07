import { useLoader, useFrame} from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useAnimations } from '@react-three/drei';
import * as THREE from 'three'; 
  
const Character5 = (props:any) => {

  const [hovered, setHovered] = useState(false);
  
    const handleClick = () => {
    props.openChatWindow();
  }

  const meshRef = useRef<THREE.Mesh>(null);
  const model = useLoader(GLTFLoader, 'models/Characters/Mech_FinnTheFrog.gltf');
  const { actions } = useAnimations(model.animations, model.scene);
  const [xPos, setXPos] = useState(1);
  const direction = useRef(1);

  // console.log(model);

  // to scale the character 
  model.scene.scale.set(0.5, 0.5, 0.5 );
  
  useEffect(() => {
    actions?.Walk?.play();
  }, [actions]);

  const handlePointerOver = (event: React.PointerEvent<THREE.Mesh>) => {
    setHovered(true);
    document.body.style.cursor = 'pointer';
  }

  const handlePointerOut = (event: React.PointerEvent<THREE.Mesh>) => {
    setHovered(false);
    document.body.style.cursor = 'auto';
  }

  return(
    
    <mesh
    {...props}
    ref={meshRef}
    onPointerOver={handlePointerOver}
    onPointerOut={handlePointerOut}
    onClick={handleClick}
  >

      <object3D rotation = {[0, -Math.PI , 0]} position = {[ -2 , 0 , -20 ]} >
        <primitive object={model.scene} /> 
      </object3D>
    </mesh>
  )
};

export default Character5;