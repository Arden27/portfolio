"use client"

import { useState, useEffect, useRef } from "react";
import { generateSessionId } from "./generSessionId";
import ChatIcon from "../../public/img/chat.svg";
import SendIcon from "../../public/img/send.svg";

import  { useSelector, useDispatch } from 'react-redux';
import { openChat, closeChat } from "@/redux/store";
import moment from 'moment-timezone';


// const chatIconColor = "rgba(249, 115, 22, .5)";
const chatIconColor = "rgba(109, 40, 217, .5)";
const SendIconNotActive = "rgba(156, 163, 175, .8)";

export default function Chat({ isChatVisible }) {
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
  const [sessionId, setSessionId] = useState(null);

  useEffect(() => {
    const existingSessionId = localStorage.getItem("sessionId");
    if (existingSessionId) {
      setSessionId(existingSessionId);
    } else {
      const newSessionId = generateSessionId();
      localStorage.setItem("sessionId", newSessionId);
      setSessionId(newSessionId);
    }
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    const storedMessages = localStorage.getItem("messages");
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

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

        if (response.status === 429) {
          const data = await response.json();
          const regex = /Please try again in (\d+)s\./;
          const matches = data.error.message.match(regex);
          if (matches && matches[1]) {
            const waitTimeSeconds = parseInt(matches[1]);
            console.error("Rate limit reached. Please wait for", waitTimeSeconds, "seconds...");
            setErrorMessage(`Rate limit reached. Please wait for ${waitTimeSeconds} seconds...`);
          }
          setIsTyping(false);
        } else if (!response.ok) {
          setIsTyping(false);
          setErrorMessage('Error calling chat API: ' + response.status.toString());
          console.error("OpenAI Error:", await response.text());
        } else {
          // ... (your current code for successful response)
          const data = await response.json();
          const assistant_response = data.choices[0].message.content;
          
          const receivedAt = moment().tz("Europe/Warsaw").format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');

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
        }
      } catch (error) {
        setIsTyping(false);
        setErrorMessage("Error calling the server: " + error.toString());
      }
    },500)
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div ref={node} className={`z-50 transition delay-1000 duration-[1500ms] ${isChatVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div
        className={`p-1 drop-shadow-xl flex-col z-50  h-[83svh] w-[90vw] sm:w-[50vw] md:w-[30vw] md:h-[65vh] fixed bottom-[9svh] right-1
        ${isChatOpen ? "slide-in-right flex" : wasOpened ? "slide-out-right flex" : "hidden"}`} //max-sm:left-1/2 max-sm:transform max-sm:-translate-x-1/2
      >
        <div
          className={"scrollable-chat flex-grow overflow-y-auto bg-gray-100/80 border rounded-xl border-primary mb-1 flex flex-col-reverse"}
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
        <div className="flex items-center h-14 w-full border bg-gray-100/80 rounded-xl border-primary">
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
      >
        <ChatIcon
          className={`border border-primary rounded-xl bg-gray-100/50 hover:bg-gray-100/80 p-1 px-2 transform scale-x-[-1] w-[9svh] h-auto 
          ${showMessage ? "animate-pulse" : ""}`}
          fill={chatIconColor}
          stroke='3'
        />
      </button>
    </div>
  );
}