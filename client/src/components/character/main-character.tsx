import React, { useState, useEffect, useRef } from 'react'; 
import { useFrame } from '@react-three/fiber';
import { useBox } from '@react-three/cannon'; 
import * as THREE from 'three'; 

function MainCharacter() {

  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {

    console.log('hi');
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
    }
  });

  return (
    <mesh scale = {[1, 1, 1]}  >
    <boxGeometry attach="geometry" />
    <meshLambertMaterial attach="material" color="hotpink" />
  </mesh>

  )
}
    
    
//   }
//   // Define the keys used with directions 
//   const keys = {
//     KeyW: 'forward', 
//     KeyS: 'backward', 
//     KeyA: 'left', 
//     KeyD: 'right', 
//   };

//    // Define the movement direction based on the key pressed
//   const moveDirection = (key) => keys[key];


//   const MoveCharacter = () => { // Define a custom hook to listen for key presses and return the movement direction
//     const [movement, setMovement] = useState({ // Define a state variable to store the movement direction
//       forward: false,
//       backward: false,
//       left: false,
//       right: false,
//     });

//     // Add event listeners when key is pressed and released
//     useEffect(() => { 
//       const handleKeyDown = (e) => { 
//         setMovement((m) => ({ ...m, [moveDirection(e.code)]: true })); 
//       };

//       // When a key is released
//       const handleKeyUp = (e) => { 
//         setMovement((m) => ({ ...m, [moveDirection(e.code)]: false })); 
//       };

//       // Add event listener for keydown
//       document.addEventListener('keydown', handleKeyDown); 

//        // Add event listener when key released 
//       document.addEventListener('keyup', handleKeyUp);

//       return () => { // Clean up by removing the event listeners
//         document.removeEventListener('keydown', handleKeyDown);
//         document.removeEventListener('keyup', handleKeyUp);
//       };
//     }, []);

//     // Return the movement state variable
//     return movement; 
//   };

//   // Call the MoveCharacter to get the movement direction
//   const { forward, backward, left, right } = MoveCharacter(); 

//   const [ref, api] = useBox(() => ({ // Use the useBox hook to create a physical box
//     mass: 10, // Set the mass of the box to 10
//     position: [0, 1, 0], // Set the initial position of the box to [0, 1, 0]
//   }));

//   useFrame(() => {
    
//     // Calculating front/side movement ...
//     let frontVector = new THREE.Vector3(0, 0, Number(forward) - Number(backward));
//     let sideVector = new THREE.Vector3(Number(right) - Number(left), 0, 0);
//     let direction = new THREE.Vector3(0, 0, 0);

//     direction
//       .subVectors(frontVector, sideVector)
//       .normalize()
//       .multiplyScalar(10);

//     api.velocity.set(direction.x, 0, direction.z);
//   });

//   return (

//   );
// }

export default MainCharacter;