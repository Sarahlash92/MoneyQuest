import {useBox} from '@react-three/cannon';
import { Mesh } from 'three';
import { useCallback } from 'react';

function Character1(props) {

  const handleClick = () => {
    props.openChatWindow();
  }

  const [ref, api] = useBox(() => ({

    mass: 1,
    position: [10, 1, 6]

  }))

  const bounce = () => {
    api.velocity.set(0, 3, 0);
  }

  setInterval(bounce, 3000);

  return (
      <mesh 
      onClick= {handleClick}
			ref={ref}
			position={[10, 1, 6]}
		  >
        <sphereBufferGeometry attach ='geometry' /> 
        <meshLambertMaterial attach='material' color= 'blue' /> 

      </mesh>

  );
}

export default Character1;