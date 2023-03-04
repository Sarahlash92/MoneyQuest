import { useLoader} from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useEffect, useMemo } from 'react';
import { useState } from 'react';


const scene_array = [
'/models/Environment/Tree_Blob_2.gltf',
'/models/Environment/Tree_Blob_3.gltf',
'/models/Environment/Tree_Floating_1.gltf',
'/models/Environment/Tree_Floating_2.gltf',
'/models/Environment/Tree_Floating_3.gltf',
'/models/Environment/Tree_Lava_1.gltf',
'/models/Environment/Tree_Lava_2.gltf',
'/models/Environment/Tree_Lava_3.gltf',
'/models/Environment/Tree_Light_1.gltf',
'/models/Environment/Tree_Light_2.gltf',
'/models/Environment/Tree_Spikes_1.gltf',
'/models/Environment/Tree_Spikes_2.gltf',
'/models/Environment/Tree_Spiral_1.gltf',
'/models/Environment/Tree_Spiral_2.gltf',
'/models/Environment/Tree_Spiral_3.gltf',
'/models/Environment/Tree_Swirl_1.gltf',
'/models/Environment/Tree_Swirl_2.gltf',]

type treeType = {

  position : {x: number, z:number};
  box: number;
  link : string
}

type props = {
  boundary: number,
  count: number
};

const Trees: React.FC<props> = ( {boundary, count} ) => {
  
  const link = useMemo(() => {
    const index = Math.floor(Math.random() * scene_array.length);
    return scene_array[index];
  }, []);

  // const model = useLoader(GLTFLoader, '/models/Environment/Tree_Blob_1.gltf');
  
  //trying to generate different models 

  const model = useLoader(GLTFLoader, link);
  
  
  
  const [trees, setTrees] = useState<treeType[]>([]);


  // model.scene.traverse((object) => {
  //   if(object.isMesh) {
  //     object.castShadow = true;
  //   }
  // });

  //generate random positions for trees 

  //copied function to assure there is no overlap 

  const boxInstersect = (
    minAx: number,
    minAz: number,
    maxAx: number,
    maxAz: number,
    minBx: number,
    minBz: number,
    maxBx: number,
    maxBz: number,

  ) => {
    let aLeftOFB = maxAx < minBx; 
    let aRightOFB = minAx > maxBx;
    let aAboveB = minAz > maxBz;
    let aBelowB = maxAz < minBz;

    return !(aLeftOFB || aRightOFB || aAboveB || aBelowB);
  };


  const isOverlapping = (
    index: number,
    tree: any,
    trees: any[]) => {
      // console.log(tree.position);
      const minTargetX = tree.position.x - tree.box /2; 
      const maxTargetX = tree.position.x + tree.box /2; 
      const minTargetZ = tree.position.z - tree.box /2; 
      const maxTargetZ = tree.position.z + tree.box /2;
      for (let i =0; i < index ; i++ ) {
        let minChildX = trees[i].position.x - trees[i].box /2;
        let maxChildX = trees[i].position.x + trees[i].box /2;
        let minChildZ = trees[i].position.x - trees[i].box /2;
        let maxChildZ = trees[i].position.x + trees[i].box /2;
        if (
          boxInstersect(
            minTargetX,
            minTargetZ,
            maxTargetX,
            maxTargetZ,
            minChildZ,
            minChildX,
            maxChildZ,
            maxChildX,
          )
        )   {
        // console.log('contect overlapping', tree.position);
        return true;
      }
    }
    return false;
  };

  const newPosition = (box: number, boundary: number) => {
    return (
      boundary / 2 - 
      box / 2 - 
        (boundary - box) * (Math.round(Math.random() * 100) / 100) 
    );
  }

  const updatePosition = (treeArray: treeType[], bounday: number) => {

    treeArray.forEach((tree, index) => {
      do {
      tree.position.x = newPosition(tree.box, boundary);
      tree.position.z = newPosition(tree.box, boundary);
      
    } while (isOverlapping(index, tree, treeArray))
    });

    setTrees(treeArray);
  }


  //create an array of trees 
  useEffect(() => {
    
    const TempTrees : treeType[] = [];
    for (let i=0; i < count ; i++) {
      TempTrees.push({position: { x:0, z:0 }, box:1 , link:''})
    }
    // console.log(TempTrees);
    updatePosition(TempTrees, boundary);
  }, [boundary, count])


  return (
    <group rotation = {[0, 4, 0]}>
      {trees.map((tree, index) => {
        return (
          
          <object3D key = {index}  position = {[tree.position.x, 0, tree.position.z]}>
            <mesh scale = {[tree.box, tree.box, tree.box]}>
              <boxGeometry/>
              <meshBasicMaterial color = {'blue'} wireframe/>
            </mesh>
            <primitive object={model.scene.clone()} />
          </object3D>
        )
      })}
     
    </group>
  );
};

export default Trees;