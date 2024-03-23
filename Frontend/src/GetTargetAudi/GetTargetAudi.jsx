import React, { useState } from 'react';
import axios from 'axios'
const GetTargetAudi = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      // Add the user's message to the conversation
      setMessages([...messages, { text: inputText, isUser: true }]);
      setInputText('');

      // Simulate response from ChatGPT
      simulateResponseFromChatGPT(inputText);
    }
  };

  const simulateResponseFromChatGPT = async(userMessage) => {
    // Simulate a response from ChatGPT
    const API = 'AIzaSyChUafLzUt7SKD_G0gUefsEdJqqpHmw_dk';
    const dat = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API}`, {
      contents: [
        {
          parts: [
            {
              text: `I am a businness owner and you are my business analyst which keeps track of my competitors and give me advice.${userMessage}`
            }
          ]
        }
      ]
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const responseMessage = dat.data.candidates[0].content.parts[0]
    console.log(responseMessage);
    // Add ChatGPT's response to the conversation
    setMessages([...messages, { text: responseMessage.text, isUser: false }]);
  };

  return (
    <div style={styles.container}>
      <h1 style={{textAlign:'center'}}>Get Advice</h1>
      <div style={styles.chatWindow}>
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              ...styles.message,
              alignSelf: message.isUser ? 'flex-end' : 'flex-start',
            }}
          >
            <div
              style={{
                ...styles.messageBubble,
                backgroundColor: message.isUser ? '#007bff' : '#e0e0e0',
                color: message.isUser ? '#fff' : '#333',
              }}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Type your message..."
          value={inputText}
          onChange={handleInputChange}
          style={styles.input}
        />
        <button onClick={handleSendMessage} style={styles.button}>
          Send
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  chatWindow: {
    width: '80%',
    height: '70%',
    overflowY: 'auto',
    marginBottom: '20px',
  },
  message: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px',
  },
  messageBubble: {
    padding: '10px',
    borderRadius: '10px',
    maxWidth: '70%',
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    flex: '1',
    padding: '10px',
    marginRight: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default GetTargetAudi;
