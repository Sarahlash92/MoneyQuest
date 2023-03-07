
import React from 'react';
import { RepeatWrapping} from 'three';
import { TextureLoader } from 'three';
import { usePlane } from '@react-three/cannon';



const Plane = (props:any) => {

  const [ref] = usePlane(() => ({rotation: [-Math.PI/2, 0, 0], ...props}));

  
  return (

      <mesh rotation={[-Math.PI/2, 0, 0]} receiveShadow>
        <planeBufferGeometry args= {[100, 100]}/>
        <meshBasicMaterial opacity={0} transparent={true}  />
      </mesh>
  )

}

export default Plane