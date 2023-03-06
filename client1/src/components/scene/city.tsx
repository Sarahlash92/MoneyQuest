import { useLoader} from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useEffect, useMemo } from 'react';
import { useState } from 'react';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';


type treeType = {

  position : {x: number, z:number};
  box: number;
  link : string
}

type props = {
  boundary: number,
  count: number
};

const City: any = () => {
  
  // const model = useLoader(GLTFLoader, '/models/Environment/Tree_Blob_1.gltf');
  
  //trying to generate different models 

  const model = useLoader(GLTFLoader, './models/mountain.gltf');
  model.scene.scale.set(10, 10, 10 );
  // model.scene.traverse((object) => {
  //   if(object.isMesh) {
  //     object.castShadow = true;
  //   }
  // });

  //generate random positions for trees 

  //copied function to assure there is no overlap 
  return (
       
          <object3D receiveShadow  position = {[0, 0, 0]}>
            <primitive object={model.scene} />
          </object3D>
        

  );
};

export default City;