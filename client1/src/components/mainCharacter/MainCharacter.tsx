import { useLoader} from '@react-three/fiber';
import { useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useAnimations } from '@react-three/drei';

  
const MainCharacter = () => {

  const model = useLoader(GLTFLoader, 'models/Characters/Astronaut_FernandoTheFlamingo.gltf');
  console.log(model);
  const { actions } = useAnimations(model.animations, model.scene)

  useEffect(() => {
    actions?.Walk?.play();
  })
  return (
    <primitive object={model.scene} /> 
  )
};

export default MainCharacter;