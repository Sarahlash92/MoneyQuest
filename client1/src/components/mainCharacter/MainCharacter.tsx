import { useLoader} from '@react-three/fiber';
import { useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useAnimations } from '@react-three/drei';

  
const MainCharacter = () => {

  const model = useLoader(GLTFLoader, 'models/Characters/Astronaut_FernandoTheFlamingo.gltf');
  // console.log(model);
  const { actions } = useAnimations(model.animations, model.scene)

  // to scale the character 
  model.scene.scale.set(0.3, 0.3, 0.3 );
  
  model.scene.traverse((object) => {
      object.castShadow = true;
  })
  
  
  
  useEffect(() => {
    actions?.Walk?.play();
  })
  return (
    <primitive object={model.scene} /> 
  )
};

export default MainCharacter;