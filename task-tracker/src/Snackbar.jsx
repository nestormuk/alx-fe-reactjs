import React, { useEffect, useState } from 'react'
import useMessageStore from './store/useMessageStore';

function Snackbar() {

    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    useEffect(() => {
        const unsubscribe = useMessageStore.subscribe(
            ({ message, messageType }) => {
                setMessage(message);
                setMessageType(messageType);
                const timer = setTimeout(() => {
                    setMessage('');
                    setMessageType('');
                }, 3000);
                return () => clearTimeout(timer);
            },
            state => [state.message, state.messageType]
        );
        return () => unsubscribe();
    }, []);

  return (
    <div>
        <div className={`fixed bottom-4 left-1/2 transform -traslate-x-1/2 
            ${messageType === 'succes' ? 'bg-green-700' : 'bg-red-700'}
             bg-opacity-70 p-4 rounded text-white`}  >
                {message && <p>{message}</p>}

             </div>
      
    </div>
  )
}

export default Snackbar
