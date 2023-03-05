import { useState, ChangeEvent } from 'react';
import svg from './sendIcon.svg';

// interface FormProps {
//   setMessages: (prev: any[]) => any[]
// }


const SendIcon = (props:any) => {
  
  return (
    <img src={svg} {...props} />
  )

}

const Form = ({setMessages}: any): JSX.Element => {

  const [message, setMessage] = useState<string>('');


  const sendMessage = (e:any) => {

    e.preventDefault();

    if (!message) return ; 

    setMessages((prev: any[]) => [
      ...prev,
    {
      msg: message,
      type: 'user'
    }
  ])
}


  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setMessage(e.target.value);
  };

  return (
    <form className = 'flex items-center relative'>
      {/* {message} */}
      <input
        type="text"
        value={message}
        placeholder="Type your message here.."
        className= 'bg-[#3A3F47] text-white placeholder:text-[#949494] text-sm rounded-2xl p-4 w-full outline-none'
        onChange={handleChange}
      />
      <button  onClick={sendMessage} type='submit' className='right-0 mr-2 absolute bg-white hover:opacity-50 active:opacite-100 transition-colors py-2 px-3 rounded-xl'> 
        <SendIcon className='w-5 h-5 fill-[#3A3F47]'/>
      </button>
    </form>
  );
};

export default Form;
