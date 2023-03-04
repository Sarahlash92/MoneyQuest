import { useLoader} from '@react-three/fiber';
import { useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useAnimations } from '@react-three/drei';

  
const Character1 = () => {


  const model = useLoader(GLTFLoader, 'models/Characters/Enemy_ExtraSmall.gltf');
  console.log(model);
  const { actions } = useAnimations(model.animations, model.scene)

  // to scale the character 
  model.scene.scale.set(0.5, 0.5, 0.5 );



  model.scene.traverse((object) => {
      object.castShadow = true;
  })
  
  
  useEffect(() => {
    actions?.Flying_Idle?.play();
  })
  return (
    <object3D position = {[5 , 0 , 2 ]} >
      <primitive object={model.scene} /> 
    </object3D>
  )
};

export default Character1;