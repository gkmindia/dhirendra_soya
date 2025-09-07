'use client';
import { useState } from 'react';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    const phoneNumber = '919423666663'; // Replace with your WhatsApp number
    const encodedMessage = encodeURIComponent(message || "Hello, I'm interested in your products.");
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  return (
    <>
      {/* Chat Popup */}
      {isOpen && (
        <div className="chat-popup">
          <div className="chat-header">
            <span>How can I help you? 🙂</span>
            <button onClick={toggleChat} className="close-btn">×</button>
          </div>
          <div className="chat-body">
            <textarea
              rows={2}
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="send-btn" onClick={handleSend}>➤</button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button className="whatsapp-float" onClick={toggleChat}>
        <img src="/images/icons/whatsapp.png" alt="WhatsApp" width={40} />
      </button>

      <style jsx>{`
        .whatsapp-float {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: transparent;
          border: none;
          z-index: 1000;
        }

        .chat-popup {
          position: fixed;
          bottom: 80px;
          right: 20px;
          width: 300px;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          z-index: 1000;
          overflow: hidden;
          font-family: sans-serif;
        }

        .chat-header {
          padding: 12px;
          background-color: #e1ffc7;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .chat-body {
          padding: 10px;
          display: flex;
          gap: 8px;
          align-items: center;
        }

        textarea {
          flex: 1;
          resize: none;
          border-radius: 20px;
          padding: 8px 12px;
          border: 1px solid #ccc;
          font-size: 14px;
        }

        .send-btn {
          background: #25D366;
          color: white;
          border: none;
          padding: 10px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 18px;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 18px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default WhatsAppChat;
