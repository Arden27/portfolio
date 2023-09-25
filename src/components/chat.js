"use client"

import { useState, useEffect, useRef } from "react";
import ChatIcon from "../../public/img/chat.svg";
import SendIcon from "../../public/img/send.svg";

import  { useSelector, useDispatch } from 'react-redux';
import { openChat, closeChat } from "@/redux/store";
import moment from 'moment-timezone';


// const chatIconColor = "rgba(249, 115, 22, .5)";
const chatIconColor = "rgba(109, 40, 217, .5)";

const SendIconNotActive = "rgba(156, 163, 175, .8)";

export default function Chat() {
  const isChatOpen = useSelector((state) => state.isChatOpen);
  const [wasOpened, setWasOpened] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesContainerRef = useRef(null);
  const inputRef = useRef(null);
  const node = useRef();
  const buttonRef = useRef(null);
  const [isTyping, setIsTyping] = useState(false);
  const knockKnock = useSelector((state) => state.knockKnock);
  const [showMessage, setShowMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [sessionId, setSessionId] = useState(() => {
    return Math.floor(Math.random() * 1000000).toString(); // Gives a random integer between 0 and 999999
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (isChatOpen && inputRef.current) {
        inputRef.current.focus();
    }
  }, [isChatOpen]);

  const handleClickOutside = (e) => {
    if (
      node.current.contains(e.target) ||
      buttonRef.current.contains(e.target)
    ) {
      return;
    }
    dispatch(closeChat())
  };

  useEffect(() => {
    // Add when mounted
    document.addEventListener("mousedown", handleClickOutside);
    
    // Return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if(knockKnock && messages.length === 0){
      setMessages((prevMessages) => [...prevMessages, { role: "assistant", content: "Knock knock 😇" }]);
    }
  }, [knockKnock]);

  // scroll the chat window to the bottom whenever a new message is added to the messages state.
  useEffect(() => {
    if (messagesContainerRef.current && isChatOpen) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
    if(isChatOpen && messages.length === 0){
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, { role: "assistant", content: "Hello 😉" }]);
      }, 2000)
    }
  }, [messages, isChatOpen]);

  useEffect(() => {
    if (!isChatOpen && messages.length > 0 && messages[messages.length-1].role === 'assistant') {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 4000)
    }
  }, [messages]);

  const handleChatButton = () => {
    if (isChatOpen) {
      dispatch(closeChat());
    } else {
      setWasOpened(true);
      dispatch(openChat());
    }
  }

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    setNewMessage("");
    setErrorMessage('')

    const sentAt = moment().tz("Europe/Warsaw").format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
    console.log(sentAt)
  
    // First update the local state
    setMessages((prevMessages) => [...prevMessages, { role: "user", content: newMessage }]);
    
    setTimeout(async () =>{
      setIsTyping(true);
      try {
        // The API expects the messages in the order they were exchanged
        const updatedMessages = [
          ...messages,
          { role: "user", content: newMessage } // Add the new user message to the end
        ];

        const response = await fetch("/api/openai", { 
          method: "POST", 
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ messages: updatedMessages })
        });
      
        if (response.ok) {
          const data = await response.json();
          const assistant_response = data.choices[0].message.content;
          
          const receivedAt = moment().tz("Europe/Warsaw").format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
          console.log(receivedAt)

          // Update the state to include the assistant's reply
          setMessages((prevMessages) => [...prevMessages, { role: "assistant", content: assistant_response }]);
          setIsTyping(false);
          // Here you call the database endpoint
          await fetch("/api/db/chat", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              userMessage: newMessage,
              assistantMessage: assistant_response,
              sessionId: sessionId,
              sentAt: sentAt,
              receivedAt: receivedAt
            })
          });
          console.log('added to db');
        } else {
          setIsTyping(false);
          setErrorMessage('Error calling chat API: ' + response.status.toString());
          console.error("OpenAI Error:", await response.text());
        }
      } catch (error) {
        setIsTyping(false);
        setErrorMessage("Error calling the server: " + error.toString());
      }
    },500)
    
    // Clear the input field
    
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div ref={node} className="z-50">
      <div
        className={`p-1 flex-col z-50  h-[83svh] w-[90vw] sm:w-[50vw] md:w-[30vw] md:h-[65vh] fixed bottom-[9svh] right-1
        ${isChatOpen ? "slide-in-right flex" : wasOpened ? "slide-out-right flex" : "hidden"}`} //max-sm:left-1/2 max-sm:transform max-sm:-translate-x-1/2
      >
        <div
          className={"scrollable-chat flex-grow overflow-y-auto bg-gray-100/80 border rounded-xl border-gray-700 mb-1 flex flex-col-reverse"}
          ref={messagesContainerRef}
        >
            {isTyping && <div className="animate-pulse max-w-[80%] p-2 px-3 m-2 break-words bg-gray-200/90 border-2 border-violet-700/70 self-start rounded-tr-xl rounded-tl-xl rounded-br-xl">○○○</div>}
            {errorMessage && <div className="animate-pulse max-w-[80%] p-2 px-3 m-2 break-words text-red-400 bg-gray-200/90 border-2 border-violet-700/70 self-start rounded-tr-xl rounded-tl-xl rounded-br-xl">{errorMessage}</div>}
            {[...messages].reverse().map((message, index) => (
                <div
                    key={index}
                    className={`max-w-[80%] p-2 m-2 break-words ${message.role === "user" ? "text-white border-2 border-transparent bg-violet-700/70 self-end rounded-tr-xl rounded-tl-xl rounded-bl-xl" : "bg-gray-100/90 border-2 border-violet-700/70 self-start rounded-tr-xl rounded-tl-xl rounded-br-xl text-gray-800"}`}
                >
                    {message.content}
                </div>
            ))}
        </div>
        <div className="flex items-center h-14 w-full border bg-gray-100/80 rounded-xl border-gray-700">
          <input
            ref={inputRef}
            name="newMessage"
            className="flex-grow p-2 h-[90%] rounded-xl bg-transparent outline-violet-700"
            type="text"
            placeholder="Type a message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            autoComplete="off"
          />
          <button className="text-white p-1 pr-2 h-full rounded-r-xl bg-transparent" onClick={handleSendMessage}>
            <SendIcon
                className=" h-[70%] w-auto"
                fill={newMessage ? chatIconColor : SendIconNotActive}
            />
          </button>
        </div>
      </div>
      <div 
        className={`scrollable-chat p-2 max-w-[40%] max-h-[40%] overflow-scroll z-50 break-words md:max-w-[25%] fixed bottom-[9svh] right-5 border rounded-tl-xl rounded-bl-xl rounded-tr-xl border-violet-700/70 bg-gray-100/70 text-gray-800
        ${showMessage && !isChatOpen ? "block" : "hidden transition-opacity duration-[4000ms] opacity-0"}`}
      >
        {messages.length > 0 && messages[messages.length-1].content}
      </div>
      <button 
        className="z-50 fixed bottom-1 right-1" 
        ref={buttonRef}
        onClick={handleChatButton}
        // onClick={() => {
        //   isChatOpen ? dispatch(closeChat()) : dispatch(openChat());
        // }}
      >
        <ChatIcon
          className={`border border-gray-600 rounded-xl bg-gray-100/50 hover:bg-gray-100/80 p-1 px-2 transform scale-x-[-1] w-[9svh] h-auto 
          ${showMessage ? "animate-pulse" : ""}`}
          fill={chatIconColor}
          stroke='3'
        />
      </button>
    </div>
  );
}