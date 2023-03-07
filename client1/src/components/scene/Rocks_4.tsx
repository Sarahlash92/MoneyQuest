import { useLoader} from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useEffect, useMemo } from 'react';
import { useState } from 'react';


const scene_array = [
  '/models/Environment/House_OpenBack.gltf',
  '/models/Environment/House_Single_Support.gltf',
  '/models/Environment/House_Single.gltf',]

type treeType = {

  position : {x: number, z:number};
  box: number;
  link : string
}

type props = {
  boundary: number,
  count: number
};

const Rocks4: React.FC<props> = ( {boundary, count} ) => {
  
  const link = useMemo(() => {
    const index = Math.floor(Math.random() * scene_array.length);
    return scene_array[index];
  }, []);


  const model = useLoader(GLTFLoader, link);
  
  const [Rocks, setRocks] = useState<treeType[]>([]);



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
    Rocks: any[]) => {
      // console.log(tree.position);
      const minTargetX = tree.position.x - tree.box /2; 
      const maxTargetX = tree.position.x + tree.box /2; 
      const minTargetZ = tree.position.z - tree.box /2; 
      const maxTargetZ = tree.position.z + tree.box /2;
      for (let i =0; i < index ; i++ ) {
        let minChildX = Rocks[i].position.x - Rocks[i].box /2;
        let maxChildX = Rocks[i].position.x + Rocks[i].box /2;
        let minChildZ = Rocks[i].position.x - Rocks[i].box /2;
        let maxChildZ = Rocks[i].position.x + Rocks[i].box /2;
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

    setRocks(treeArray);
  }


  //create an array of Rocks 
  useEffect(() => {
    
    const TempRocks : treeType[] = [];
    for (let i=0; i < count ; i++) {
      TempRocks.push({position: { x:0, z:0 }, box:1 , link:''})
    }
    // console.log(TempRocks);
    updatePosition(TempRocks, boundary);
  }, [boundary, count])


  return (
    <group rotation = {[0, 4, 0]}>
      {Rocks.map((tree, index) => {
        return (
          
          <object3D key = {index}  position = {[tree.position.x, 0, tree.position.z]}>
            {/* <mesh scale = {[tree.box, tree.box, tree.box]}>
              <boxGeometry/>
              <meshBasicMaterial color = {'blue'} wireframe/>
            </mesh> */}
            <primitive object={model.scene.clone()} />
          </object3D>
        )
      })}
     
    </group>
  );
};

export default Rocks4;