import React from 'react';


interface MessageProps {
  msg: string;
  type: string;
}

interface MessagesProps {
  messages: MessageProps[];
}

const Message:React.FC<MessageProps>= ({msg, type}) => {

  return (
    <div className = {`flex items-center 
      ${type === 'bot' ? 'justify-start': 'justify-end' }`}>
     <div className={`flex flex-col items-start justify-center text-white rounded-xl p-4
      ${type === 'bot' ? 'bg-[#3A3F47] rounded-tl-none' : 'bg-[#8AA1FF] rounded-br-none' }`}> 
             <p>
            {msg}
          </p>
      </div>
   
  </div>
  )


}

const Messages:React.FC<MessagesProps> = ({messages}) => {

return (
  <div className ='w-[600px] max-h-96 overflow-y-scroll scrollbar-hide'> 
    {messages.length ? messages.map((message, index )=>(
      <Message key={index} {...message} /> 
    ) ) : 
    <div className='flex items-center justify-center h-full'>
      <p className='text-white'> don't be shy ask away ! </p>
    </div>}
    </div>
    )
    }
export default Messages