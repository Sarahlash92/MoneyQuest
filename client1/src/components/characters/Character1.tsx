import { useLoader, useFrame} from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useAnimations } from '@react-three/drei';
import * as THREE from 'three'; 
  
const Character1 = (props:any) => {

  console.log("this is the props" + JSON.stringify(props))

    const handleClick = () => {
    props.openChatWindow();
  }

  const meshRef = useRef<THREE.Mesh>(null);
  const model = useLoader(GLTFLoader, 'models/Characters/Enemy_Large.gltf');
  const { actions } = useAnimations(model.animations, model.scene);
  const [xPos, setXPos] = useState(5);
  const direction = useRef(1);

  // console.log(model);

  // to scale the character 
  model.scene.scale.set(0.5, 0.5, 0.5 );


  model.scene.traverse((object) => {
      object.castShadow = true;
  })
  
  
  useEffect(() => {
    actions?.Walk?.play();
  }, [actions]);

  useFrame((state, delta) => {
    setXPos((prevXPos) => {

      const newXPos = prevXPos + direction.current * delta * 2;
      
      if (newXPos > 7 || newXPos < 3){
        direction.current = -direction.current;
      }
      return newXPos;
    });
  });

  return (
    <mesh ref = {meshRef} onClick= {handleClick}>
      <object3D position = {[ 5, 0 , xPos ]} >
        <primitive object={model.scene} /> 
      </object3D>
    </mesh>
  )
};

export default Character1;