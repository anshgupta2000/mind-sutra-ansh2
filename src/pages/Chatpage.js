import React, { useState } from 'react';
import './Chatpage.css'

function Chatpage() {
  const [messages, setMessages] = useState([]); // Store chat messages
  const [inputText, setInputText] = useState(''); // Store user input

  // Function to handle user input submission
  const handleUserInput = (e) => {
    e.preventDefault();
    if (inputText.trim() === '') return; // Ignore empty input

    // Add user message to the chat
    setMessages([...messages, { text: inputText, isUser: true }]);
    setInputText('');

    // Simulate chatbot response (you can replace this with actual chatbot logic)
    setTimeout(() => {
      setMessages([...messages, { text: 'This is a chatbot response.', isUser: false }]);
    }, 1000);
  };

  // Render chat messages
  const renderChatMessages = () => {
    return messages.map((message, index) => (
      <div key={index} className={message.isUser ? 'user-message' : 'bot-message'}>
        {message.text}
      </div>
    ));
  };

  return (
    <div className="chatpage-container">
      <div className="chatpage-left-panel">
        <div className="chatpage-chats">
          {/* List of previous chats */}
          <div className="chatpage-chat-item">Chat 1</div>
          <div className="chatpage-chat-item">Chat 2</div>
          <div className="chatpage-chat-item">Chat 3</div>
          {/* Option to start a new chat */}
          <button className="chatpage-new-chat-button">Start New Chat</button>
        </div>
      </div>
      <div className="chatpage-right-panel">
        <div className="chatpage-messages">{renderChatMessages()}</div>
        <form className="chatpage-input-form" onSubmit={handleUserInput}>
          <input
            type="text"
            className="chatpage-input"
            placeholder="Type your message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button type="submit" className="chatpage-send-button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chatpage;
