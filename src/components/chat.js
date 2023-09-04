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
    setMessages((prevMessages) => [...prevMessages, { text: newMessage, type: "sent" }]);
    setNewMessage("");

    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, { text: newMessage, type: "received" }]);
    }, 1000);
  };

  return (
    <div className="z-50">
      <div
        className={`${open ? "" : "hidden"} p-1 flex flex-col z-50 border rounded-xl border-black h-[85vh] w-[90vw] fixed bottom-16 right-6 bg-gray-100/50`}
      >
        <div
            className="flex-grow overflow-y-auto bg-red-100/80 border rounded-xl border-black mb-1 flex flex-col justify-end"
            ref={messagesContainerRef}
        >
            {messages.map((message, index) => (
                <div
                key={index}
                className={`p-2 m-2 rounded-xl ${message.type === "sent" ? "bg-blue-300 text-white self-start" : "bg-green-300 self-end"}`}
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
