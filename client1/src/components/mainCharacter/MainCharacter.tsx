import { useLoader} from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useAnimations , OrthographicCamera} from '@react-three/drei';
import { useInput } from '../../hooks/useInput'
import { useThree } from '@react-three/fiber'
import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei/core';
import * as THREE from 'three'; 


let walkDirection = new THREE.Vector3();
let rotateAngle = new THREE.Vector3(0, 1, 0);
let rotateQuarternion = new THREE.Quaternion();
let cameraTarget = new THREE.Vector3();

const directionOffset = ({forward , backward, left, right} : { forward: any, backward: any, left: any, right: any }) => {
  let directionOffset = 0; 

  if (forward) {
    if (left) {
      directionOffset = Math.PI /4 ; 
    } else if (right) {
      directionOffset = -Math.PI /4 ; 
    } 
  } else if (backward) {
    if (left) {
      directionOffset = Math.PI /4 + Math.PI /2 ;
    } else if (right) {
      directionOffset = Math.PI /4 - Math.PI /2 ;
    } else {
      directionOffset = Math.PI;
    }
  } else if (left){
    directionOffset = Math.PI / 2; 
  } else if (right) {
    directionOffset = -Math.PI /2;
  }

  return directionOffset;
};

const MainCharacter = () => {
  
  const {forward, backward, left, right, jump} = useInput();
  const model = useLoader(GLTFLoader, 'models/Characters/Astronaut_FernandoTheFlamingo.gltf');
 
  // console.log(model);
  const { actions } = useAnimations(model.animations, model.scene)

 
  // to scale the character 
  model.scene.scale.set(0.3, 0.3, 0.3 );
  
  model.scene.traverse((object) => {
      object.castShadow = true;
  })
  
  const currentAction = useRef('');
  const controlsRef = useRef<any>(null);
  const camera = useThree(state => state.camera);

  const updateCameraTarget = (moveX: number, moveZ: number) => {
    //move camera 
    camera.position.x += moveX;
    camera.position.z += moveZ;

    //update camera target 
    cameraTarget.x = model.scene.position.x;
    cameraTarget.y = model.scene.position.y + 4;
    cameraTarget.z = model.scene.position.z;
    if (controlsRef.current) controlsRef.current.taget = cameraTarget;

  }

  useEffect(() => {

    let action = '';

    if(forward || backward || left || right) {

      action = "Walk";
      // actions?.Walk?.play();
    } else if (jump){
      
      action = "Jump"

    }
    
    // console.log('Forward', forward);
    // console.log('Backwards', backward);
    // console.log('left', left);
    // console.log('right', right);
    // console.log('jump', jump);

    if (currentAction.current != action) {
      const nextActionToPlay = actions[action];
      const current = actions[currentAction.current];
      current?.fadeOut(0.2);
      nextActionToPlay?.reset().fadeIn(0.2).play();
      currentAction.current = action;
    }

    
  }, [forward, backward, left, right, jump])

  useFrame((state, delta) => {

    if (currentAction.current  == 'Walk') {
        
      let angleYCameraDirection = Math.atan2(
        camera.position.x - model.scene.position.x,
        camera.position.z - model.scene.position.z,
      
      );

      //diagonal movement angle effect 
      let newDirectionOffset = directionOffset({
        forward,
        backward,
        left,
        right
      });

      //rotate model 
      rotateQuarternion.setFromAxisAngle(
        rotateAngle,
        angleYCameraDirection + newDirectionOffset
      );
      model.scene.quaternion.rotateTowards(rotateQuarternion, 0.2)
  
      //calculate the direction 
      camera.getWorldDirection(walkDirection);
      walkDirection.y = 0;
      walkDirection.normalize();
      walkDirection.applyAxisAngle(rotateAngle, newDirectionOffset);
    
    // walk 
    const velocity = 3;

    const moveX = walkDirection.x * velocity * delta;
    const moveZ = walkDirection.z * velocity * delta;
    model.scene.position.x += moveX;
    model.scene.position.z += moveZ;
    updateCameraTarget(moveX, moveZ);
    }

  });

  return (
    <>
      {/* <OrthographicCamera > */}

        <OrbitControls ref={controlsRef} position={[0, 0, 5]} />
        <primitive object={model.scene} rotation = {[0,0,0]} /> 

      {/* </OrthographicCamera> */}

    </>
  )
};

export default MainCharacter;