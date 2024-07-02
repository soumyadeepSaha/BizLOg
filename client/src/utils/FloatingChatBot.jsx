// FloatingChatBot.js
import  { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from '../chatbotutils/Config';
import ActionProvider from '../chatbotutils/ActionProvider';// If you have an ActionProvider
import MessageParser from '../chatbotutils/MessageParser'; // If you have a MessageParser

const FloatingChatBot = () => {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <div>
      <button
        style={floatingButtonStyle}
        onClick={toggleChat}
      >
        Chat
      </button>
      {showChat && (
        <div style={chatBoxStyle}>
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
        </div>
      )}
    </div>
  );
};

const floatingButtonStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  backgroundColor: '#376B7E',
  color: 'white',
  border: 'none',
  borderRadius: '50%',
  width: '60px',
  height: '60px',
  fontSize: '20px',
  cursor: 'pointer',
  zIndex: 1000,
};

const chatBoxStyle = {
  position: 'fixed',
  bottom: '80px',
  right: '20px',
  width: '300px',
  height: '500px',
  zIndex: 1000,
};

export default FloatingChatBot;
