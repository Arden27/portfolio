"use client"

import { useState, useEffect, useRef } from "react";
import ChatIcon from "../../public/img/chat.svg";

const chatIconColor = "rgba(249, 115, 22, .8)";

export default function Chat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleChatButton = () => {
    setOpen(!open);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;  // Prevent sending empty messages

    setMessages((prevMessages) => [{ text: newMessage, type: "sent" }, ...prevMessages]); // new message at the beginning
    setNewMessage("");
  
    setTimeout(() => {
      setMessages((prevMessages) => [{ text: newMessage, type: "received" }, ...prevMessages]); // simulated reply at the beginning
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="z-50">
      <div
        className={`${open ? "" : "hidden"} p-1 flex flex-col z-50 border rounded-xl border-black h-[85vh] w-[90vw] sm:w-[50vw] md:w-[35vw] fixed bottom-16 right-6 bg-gray-100/50`}
      >
        <div
          className="flex-grow overflow-y-auto bg-gray-100/50 border rounded-xl border-black mb-1 flex flex-col-reverse"
          ref={messagesContainerRef}
        >
            {messages.map((message, index) => (
                <div
                    key={index}
                    className={`max-w-[80%] p-2 m-2 break-words 
                    ${message.type === "sent" ? "bg-blue-500 text-white self-start rounded-tr-xl rounded-tl-xl rounded-br-xl" 
                    : "bg-green-400 self-end rounded-tr-xl rounded-tl-xl rounded-bl-xl"}`}
                >
                    {message.text}
                </div>
            ))}
        </div>
        <div className="flex h-14 w-full bg-green-200/80 border rounded-xl border-black">
          <input
            className="flex-grow p-2 rounded-l-xl"
            type="text"
            placeholder="Type a message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button className="bg-blue-500 text-white p-2 rounded-r-xl" onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>
      <button className="z-50 fixed bottom-1 right-5" onClick={() => handleChatButton()}>
        <ChatIcon
          className="border border-black rounded-xl bg-gray-100/50 hover:bg-gray-100/80 p-1 px-2 transform scale-x-[-1] w-16 h-auto"
          fill={chatIconColor}
        />
      </button>
    </div>
  );
}