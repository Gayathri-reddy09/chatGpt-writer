import React, { useState } from 'react';
import { Input } from 'antd';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { MessageInputProps } from './MessageInputProps';
import 'tailwindcss/tailwind.css';

const MessageInput: React.FC<MessageInputProps> = ({ onIconClick, onInsertStaticText }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [prompt, setPrompt] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    onIconClick();
  };

  return (
    <div className="container mx-auto flex justify-center items-center">
      <div className={`message-input-container ${isFocused ? 'focused' : ''} relative`} >
        <Input
          className="input-field bg-gray-200 border-none  relative z-10"
          style={{ width: '400px', height: '100px', background: 'rgb(184, 184, 184)', borderRadius: '8px' }}
          placeholder="Type your message here.."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {isFocused && (
          <div className="absolute bottom-2 right-2">
            <AutoFixHighIcon className="icon zIndex cursor-pointer" style={{ color: 'blue' }} onClick={() => onInsertStaticText("Thank you for your message!")} />
          </div>
        )}
      </div>
    </div>
  );
};
export default MessageInput;
