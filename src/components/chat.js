"use client"

import { useState, useEffect, useRef } from "react";
import ChatIcon from "../../public/img/chat.svg";  // You'll need to replace this import to match your actual setup
import { artem_context } from "@/components/chatContext"


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

  const handleSendMessage = async () => {
    if (newMessage.trim() === '') return;
    setNewMessage("");
  
    // First update the local state
    setMessages((prevMessages) => [...prevMessages, { text: newMessage, type: "sent" }]);
    
    
    
    try {
      console.log("Attempting to call OpenAI API...");
  
      // The API expects the messages in the order they were exchanged
      const apiFormattedMessages = [
        { role: "system", content: artem_context },
        ...messages.map(msg => ({ role: msg.type === "sent" ? "user" : "assistant", content: msg.text })),
        { role: "user", content: newMessage } // Add the new user message to the end
      ];
  
      const payload = {
        model: "gpt-3.5-turbo",
        messages: apiFormattedMessages
      };
    
      console.log("Payload to be sent:", JSON.stringify(payload, null, 2));
    
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`
        },
        body: JSON.stringify(payload),
      });
    
      if (response.ok) {
        const data = await response.json();
        const assistant_response = data.choices[0].message.content;
  
        // Update the state to include the assistant's reply
        setMessages((prevMessages) => [...prevMessages, { text: assistant_response, type: "received" }]);
      } else {
        console.log(`Received a non-OK HTTP status from OpenAI API: ${response.status}`);
      }
    } catch (error) {
      console.error("Error calling the OpenAI API: ", error);
    }
    
    // Clear the input field
    
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="z-50">
      <div
        className={`${open ? "" : "hidden"} p-1 flex flex-col z-50 border rounded-xl border-black h-[83svh] w-[90vw] sm:w-[50vw] md:w-[35vw] fixed bottom-[9svh] right-6 bg-gray-100/50`}
      >
        <div
          className="flex-grow overflow-y-auto bg-gray-100/50 border rounded-xl border-black mb-1 flex flex-col-reverse"
          ref={messagesContainerRef}
        >
            {[...messages].reverse().map((message, index) => (
                <div
                    key={index}
                    className={`max-w-[80%] p-2 m-2 break-words ${message.type === "sent" ? "bg-blue-500 text-white self-start rounded-tr-xl rounded-tl-xl rounded-br-xl" : "bg-green-400 self-end rounded-tr-xl rounded-tl-xl rounded-bl-xl"}`}
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
      <button className="z-50 fixed bottom-1 right-5" onClick={handleChatButton}>
        <ChatIcon
          className="border border-black rounded-xl bg-gray-100/50 hover:bg-gray-100/80 p-1 px-2 transform scale-x-[-1] w-[9svh] h-auto"
          fill={chatIconColor}
        />
      </button>
    </div>
  );
}
