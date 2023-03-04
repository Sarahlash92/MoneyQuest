import { useLoader} from '@react-three/fiber';
import { useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useAnimations } from '@react-three/drei';

  
const Character2 = () => {


  const model = useLoader(GLTFLoader, 'models/Characters/Mech_BarbaraTheBee.gltf');
  // console.log(model);
  const { actions } = useAnimations(model.animations, model.scene)

  // to scale the character 
  model.scene.scale.set(0.5, 0.5, 0.5 );



  model.scene.traverse((object) => {
      object.castShadow = true;
  })
  
  
  useEffect(() => {
    actions?.Dance?.play();
  })
  return (
    <object3D position = {[-8 , 0 , 2 ]} >
      <primitive object={model.scene} /> 
    </object3D>
  )
};

export default Character2;