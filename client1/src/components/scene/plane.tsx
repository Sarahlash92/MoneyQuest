
import React from 'react';
import { RepeatWrapping} from 'three';
import { TextureLoader } from 'three';
import { usePlane } from '@react-three/cannon';



const Plane = (props:any) => {

  const [ref] = usePlane(() => ({rotation: [-Math.PI/2, 0, 0], ...props}));

  
  return (

      <mesh rotation={[-Math.PI/2, 0, 0]} receiveShadow>
        <planeBufferGeometry attach='geometry' args= {[100, 100]}/>
        <meshBasicMaterial color={'white'} attach='material'  />
      </mesh>
  )

}

export default Plane