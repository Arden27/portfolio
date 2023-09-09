"use client"

import { useState, useEffect, useRef } from "react";
import ChatIcon from "../../public/img/chat.svg";
import SendIcon from "../../public/img/send.svg";
import { artem_context } from "@/components/chatContext";

import  { useSelector, useDispatch } from 'react-redux';
import { openChat, closeChat } from "@/redux/store";


// const chatIconColor = "rgba(249, 115, 22, .5)";
const chatIconColor = "rgba(109, 40, 217, .5)";

const SendIconNotActive = "rgba(156, 163, 175, .8)";

export default function Chat() {
  const isChatOpen = useSelector((state) => state.isChatOpen)
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesContainerRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (newMessage.trim() === '') return;
    setNewMessage("");
  
    // First update the local state
    setMessages((prevMessages) => [...prevMessages, { text: newMessage, type: "sent" }]);
    
    
    
    try {
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
        className={`${isChatOpen ? "" : "hidden"} p-1 flex flex-col z-50  h-[83svh] w-[90vw] sm:w-[50vw] md:w-[30vw] md:h-[65vh] fixed bottom-[9svh] right-6`}
      >
        <div
          className={"flex-grow overflow-y-auto bg-gray-100/80 border rounded-xl border-black mb-1 flex flex-col-reverse"}
          ref={messagesContainerRef}
        >
            {[...messages].reverse().map((message, index) => (
                <div
                    key={index}
                    className={`max-w-[80%] p-2 m-2 break-words ${message.type === "sent" ? "text-white bg-violet-700/70 self-end rounded-tr-xl rounded-tl-xl rounded-bl-xl" : "bg-gray-100/90 border-2 border-violet-700/70 self-start rounded-tr-xl rounded-tl-xl rounded-br-xl"}`}
                >
                    {message.text}
                </div>
            ))}
        </div>
        <div className="flex items-center h-14 w-full border bg-gray-100/80 rounded-xl border-black">
          <input
            name="newMessage"
            className="flex-grow p-2 h-[90%] rounded-xl bg-transparent outline-violet-700"
            type="text"
            placeholder="Type a message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button className="text-white p-1 pr-2 h-full rounded-r-xl bg-transparent" onClick={handleSendMessage}>
            <SendIcon
                className=" h-[70%] w-auto"
                fill={newMessage ? chatIconColor : SendIconNotActive}
            />
          </button>
        </div>
      </div>
      <button 
        className="z-50 fixed bottom-1 right-5" 
        onClick={() => {
          isChatOpen ? dispatch(closeChat()) : dispatch(openChat());
        }}
      >
        <ChatIcon
          className="border border-black rounded-xl bg-gray-100/50 hover:bg-gray-100/80 p-1 px-2 transform scale-x-[-1] w-[9svh] h-auto"
          fill={chatIconColor}
          stroke='3'
        />
      </button>
    </div>
  );
}
