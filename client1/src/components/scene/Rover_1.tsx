import { useLoader} from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useMemo } from 'react';


const scene_array = [ 
'/models/Environment/Base_Large.gltf',
'/models/Environment/Building_L.gltf',
'/models/Environment/Bush_1.gltf',
'/models/Environment/Bush_2.gltf',
'/models/Environment/Bush_3.gltf',
'/models/Environment/Connector.gltf',
'/models/Environment/GeodesicDome.gltf',
'/models/Environment/Grass_1.gltf',
'/models/Environment/Grass_2.gltf',
'/models/Environment/Grass_3.gltf',
'/models/Environment/House_Cylinder.gltf',
'/models/Environment/House_Long.gltf',
'/models/Environment/House_Open.gltf',
'/models/Environment/House_OpenBack.gltf',
'/models/Environment/House_Single_Support.gltf',
'/models/Environment/House_Single.gltf',
'/models/Environment/MetalSupport.gltf',
'/models/Environment/Planet_1.gltf',
'/models/Environment/Planet_2.gltf',
'/models/Environment/Planet_3.gltf',
'/models/Environment/Planet_4.gltf',
'/models/Environment/Planet_5.gltf',
'/models/Environment/Planet_6.gltf',
'/models/Environment/Planet_7.gltf',
'/models/Environment/Planet_8.gltf',
'/models/Environment/Planet_9.gltf',
'/models/Environment/Planet_10.gltf',
'/models/Environment/Planet_11.gltf',
'/models/Environment/Plant_1.gltf',
'/models/Environment/Plant_2.gltf',
'/models/Environment/Plant_3.gltf',
'/models/Environment/Ramp.gltf',
'/models/Environment/Rock_1.gltf',
'/models/Environment/Rock_2.gltf',
'/models/Environment/Rock_3.gltf',
'/models/Environment/Rock_4.gltf',
'/models/Environment/Rock_Large_1.gltf',
'/models/Environment/Rock_Large_2.gltf',
'/models/Environment/Rock_Large_3.gltf',
'/models/Environment/Roof_Antenna.gltf',
'/models/Environment/Roof_Opening.gltf',
'/models/Environment/Roof_Radar.gltf',
'/models/Environment/Roof_VentL.gltf',
'/models/Environment/Roof_VentR.gltf',
'/models/Environment/SolarPanel_Ground.gltf',
'/models/Environment/SolarPanel_Roof.gltf',
'/models/Environment/SolarPanel_Structure.gltf',
'/models/Environment/Stairs.gltf',
'/models/Environment/Tree_Blob_1.gltf',
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



const Rover_1 = () => {

  const randomIndex = Math.floor(Math.random() * scene_array.length);
  const randomModel = scene_array[randomIndex];
  const model = useLoader(GLTFLoader, randomModel);

  const position = useMemo(() => {
    return [
      Math.random() * 20 - 10, // x position between -10 and 10
      0, // y position between -10 and 10
      Math.random() * 20 - 10, // z position between -10 and 10
    ];
  }, []);

  return <primitive object={model.scene} position={position} />;
};

export default Rover_1;