import { useEffect, useState } from "react";

const useInput = () => {

  const [input, setInput] = useState({
    
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false,

  });

  const keys: {[key : string]: string} = {
    KeyW: 'forward',
    KeyS: 'backward',
    KeyA: 'left',
    KeyD: 'right',
    keyQ: 'jump'
  };

  const findKey = (key: string ) => keys[key];

useEffect(() => {


  const handleKeyDown = (e:any) => {
    setInput( (m) => ({...m, [findKey(e.code)]: true }));
  }

  const handleKeyUp = (e:any) => {
    setInput( (m) => ({...m, [findKey(e.code)]: false }));
  }

  document.addEventListener('keydown',handleKeyDown);
  document.addEventListener('keyup', handleKeyUp);
  
}, [])

  return input; 
}

export default useInput;