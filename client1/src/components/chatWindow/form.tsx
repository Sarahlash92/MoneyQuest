import { useState, ChangeEvent } from 'react';
import svg from './sendIcon.svg';


const SendIcon = (props:any) => {
  
  return (
    <img src={svg} {...props} />
  )

}

const Form = ({setMessages}: any): JSX.Element => {

  const [message, setMessage] = useState<string>('');

  const messageResponse = async () => {
    const response = await fetch('http://localhost:5000/message', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({ message })
    })
    const data = await response.json();

    // console.log(data);
    setMessages((prev:any[]) => [
      ...prev, {
        msg: data.message,
        type: 'bot'
      }
    ])
  }

  const sendMessage = async(e:any) => {

    e.preventDefault();

    if (!message) return ; 

    setMessages((prev: any[]) => [
      ...prev,
    {
      msg: message,
      type: 'user'
    }
  ])
  setMessage('');
  await messageResponse();
}


  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setMessage(e.target.value);
  };

  return (
    <form className = 'flex bottom-0 absolute items-center relative '>
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
