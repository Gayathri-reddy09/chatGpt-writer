import React, { useState } from 'react';
import './modal.css';
import CachedIcon from '@mui/icons-material/Cached';
import SendIcon from '@mui/icons-material/Send';
import SouthIcon from '@mui/icons-material/South';
import './MessageInput.css';

interface ModalProps {
  onClose: () => void;
  onInsertStaticText: (text: string) => void;
}

const Modal: React.FC<ModalProps> = ({ onClose, onInsertStaticText }) => {
  const [messages, setMessages] = useState<{ text: string; isUserGenerated?: boolean }[]>([]);
  const [prompt, setPrompt] = useState('');
  const [regenerateButton, setRegenerateButton] = useState(false);
  const [showInsertButton, setShowInsertButton] = useState(false);

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleInsertStaticText = () => {
    const generatedStaticText = "Thank you for your message!If you have any more questions or if there's anything else I can help you with, feel free to ask";
    setPrompt(generatedStaticText);
    setRegenerateButton(false); 
    setShowInsertButton(false); 
     
  };

  const handleGenerateClick = () => {
    const newMessage = prompt;
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: newMessage, isUserGenerated: true },
      { text: 'Thank you for the opportunity! If you have any more questions or if there\'s anything else I can help you with, feel free to ask' },
    ]);
    setPrompt('');
    setRegenerateButton(true);
    setShowInsertButton(true); 
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={handleModalClick}>
        <div className="chat-container">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.isUserGenerated ? 'user-generated' : ''}`}>
              {message.text}
            </div>
          ))}
        </div>
        <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Enter your prompt..." />
        <div className="flex items-center">
        <button onClick={handleGenerateClick} className='generate flex items-center gap-2 px-4 py-2 rounded-md bg-blue-500 text-white'>
            {regenerateButton ? <CachedIcon style={{ fontSize: 18 }} /> : <SendIcon style={{ fontSize: 20 }} />}
                   <span>{regenerateButton ? 'Regenerate' : 'Generate'}</span>
          </button>

        {showInsertButton && (
           <button onClick={handleInsertStaticText} className='insert flex items-center gap-2 px-4 py-2 ml-4 rounded-md border border-gray-300'>
        <SouthIcon style={{ fontSize: 18 }} />
           <span>Insert</span>
        </button>
         )}

          
        </div>
      </div>
    </div>
  );
};

export default Modal;
