import React, { useState } from 'react';
import MessageInput from './components/MessageInput';
import Modal from './components/Modal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prompt, setPrompt] = useState('');

  const handleIconClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInsertStaticText = (text: string) => {
    setPrompt(text); 
    setIsModalOpen(false); 
  }; 

  return (
    <div className="app-container">
      <h2 style={{marginLeft:'600px', alignContent:'center',justifyContent:'center',marginTop:'50px'}}>My ChatGPT Writer</h2>
      <MessageInput  prompt={prompt} onIconClick={handleIconClick} onInsertStaticText={handleInsertStaticText} />
      {isModalOpen && <Modal onClose={handleCloseModal} onInsertStaticText={handleInsertStaticText} />} 
    </div>
  );
};

export default App;
