import React, { useState, useRef, useEffect } from 'react';
import { FaPaperclip, FaSmile, FaPaperPlane, FaCheck, FaCheckDouble } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';

// Mock user data
const currentUser = {
  id: 1,
  name: 'You',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D'
};

const otherUser = {
  id: 2,
  name: 'John Abraham',
  avatar: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D'
};

// Mock messages
const initialMessages = [
  {
    id: 1,
    text: 'Hello! I have a question about my shipment.',
    sender: otherUser,
    timestamp: '10:30 AM',
    status: 'read'
  },
  {
    id: 2,
    text: 'Hi John, I\'d be happy to help. What shipment are you referring to?',
    sender: currentUser,
    timestamp: '10:32 AM',
    status: 'read'
  },
  {
    id: 3,
    text: 'The shipment to New York that was supposed to be delivered yesterday.',
    sender: otherUser,
    timestamp: '10:33 AM',
    status: 'read'
  },
  {
    id: 4,
    text: 'I see. Let me check the status for you. It shows the shipment is in transit and expected to arrive by tomorrow.',
    sender: currentUser,
    timestamp: '10:35 AM',
    status: 'read'
  },
  {
    id: 5,
    text: 'That\'s good to hear. Can you share the tracking link?',
    sender: otherUser,
    timestamp: '10:36 AM',
    status: 'delivered'
  },
  {
    id: 6,
    text: 'Sure, here you go: https://tracking.example.com/SH-7845',
    sender: currentUser,
    timestamp: '10:37 AM',
    status: 'sent'
  }
];

const Message = ({ message, isOwnMessage }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'sent':
        return <FaCheck className="text-gray-400 text-xs" />;
      case 'delivered':
        return <FaCheckDouble className="text-gray-400 text-xs" />;
      case 'read':
        return <FaCheckDouble className="text-blue-500 text-xs" />;
      default:
        return null;
    }
  };

  return (
    <div className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'} mb-4`}>
      {!isOwnMessage && (
        <img
          src={message.sender.avatar}
          alt={message.sender.name}
          className="w-8 h-8 rounded-full mr-3 self-end"
        />
      )}
      
      <div className={`max-w-[70%] ${isOwnMessage ? 'order-first' : ''}`}>
        <div className={`rounded-2xl px-4 py-3 ${isOwnMessage 
          ? 'bg-blue-600 text-white rounded-br-none' 
          : 'bg-gray-100 text-gray-800 rounded-bl-none'
        }`}>
          <p className="text-sm">{message.text}</p>
        </div>
        
        <div className={`flex items-center gap-2 mt-1 text-xs text-gray-500 ${isOwnMessage ? 'justify-end' : 'justify-start'}`}>
          <span>{message.timestamp}</span>
          {isOwnMessage && getStatusIcon(message.status)}
        </div>
      </div>
    </div>
  );
};

const MessageBody = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const newMsg = {
      id: messages.length + 1,
      text: newMessage,
      sender: currentUser,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    };

    setMessages([...messages, newMsg]);
    setNewMessage('');

    // Simulate reply after 1 second
    setTimeout(() => {
      const replyMsg = {
        id: messages.length + 2,
        text: 'Thanks for your message. I\'ll get back to you shortly.',
        sender: otherUser,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'read'
      };
      setMessages(prev => [...prev, replyMsg]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }
  };

  return (
   <div className="flex flex-col h-[90vh] border-l-4  w-screen bg-white overflow-hidden">

      {/* Chat Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={otherUser.avatar}
              alt={otherUser.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="font-semibold text-gray-800">{otherUser.name}</h3>
              <p className="text-xs text-green-600 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Online
              </p>
            </div>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <BsThreeDotsVertical className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
        {/* Date Separator */}
        <div className="text-center mb-6">
          <span className="text-xs text-gray-500 bg-gray-100 px-4 py-1 rounded-full">
            Today
          </span>
        </div>

        {/* Messages */}
        <div className="space-y-1">
          {messages.map((message) => (
            <Message
              key={message.id}
              message={message}
              isOwnMessage={message.sender.id === currentUser.id}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Message Input */}
      <div className="bg-white border-t border-gray-200 p-4">
        <form onSubmit={handleSendMessage} className="flex items-center gap-3">
          <button
            type="button"
            className="p-3 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <FaPaperclip className="text-gray-600" />
          </button>
          
          <div className="flex-1 relative">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message here..."
              className="w-full border border-gray-300 rounded-lg py-3 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <FaSmile className="text-gray-600" />
            </button>
          </div>
          
          <button
            type="submit"
            disabled={!newMessage.trim()}
            className={`p-3 rounded-lg transition-colors ${
              newMessage.trim()
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <FaPaperPlane />
          </button>
        </form>
        

      </div>
    </div>
  );
};

export default MessageBody;