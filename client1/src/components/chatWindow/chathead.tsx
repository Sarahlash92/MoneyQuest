import react from 'react';
import svg from './avatar-svgrepo.svg';


const Logo =(props:any) => {
  
  return (

    <img src={svg} {...props} />

  )
}


function Head(){
  return (
    <div className='flex items-center'>
      <div className= 'bg-white flex items-center justify-center p-4 rounded-full'>
        <Logo className='w-10 h-10'/>
      </div>
      <span className= 'text-white text-lg ml-4'>IRS agent</span>
    </div>
  )
  }

export default Head;