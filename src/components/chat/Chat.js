"use client";

import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

// custom hooks
import useMessages from "./hooks/useMessages";
import useOutsideClick from "./hooks/useOutsideClick";
import usePopupMessage from "./hooks/usePopupMessage";
import useSendMessage from "./hooks/useSendMessage";
import useSaveLogToDB from "@/hooks/useSaveLogToDB";
// components
import MessageList from "./components/MessageList";
import InputArea from "./components/InputArea";
import PopMessage from "./components/PopMessage";
import ChatButton from "./components/ChatButton";

import { openChat, closeChat } from "@/redux/store";

export default function Chat({ isChatVisible }) {
  const isChatOpen = useSelector((state) => state.isChatOpen);
  const sessionId = useSelector((state) => state.sessionId);
  const [wasOpened, setWasOpened] = useState(false);
  const [messages, updateMessages] = useMessages();
  const [newMessage, setNewMessage] = useState("");
  const messagesContainerRef = useRef(null);
  const inputRef = useRef(null);
  const node = useRef();
  const buttonRef = useRef(null);
  const knockKnock = useSelector((state) => state.knockKnock);
  const showMessage = usePopupMessage(messages, isChatOpen);
  const { sendMessage, isTyping, errorMessage } = useSendMessage();

  const { saveLogToDB } = useSaveLogToDB();

  const dispatch = useDispatch();

  // const initialLoadRef = useRef(true)

  // useEffect(() => {
  //   if(initialLoadRef.current){
  //     initialLoadRef.current = false;
  //     saveLogToDB("hello from chat");
  //   }
  // }, [])

  useEffect(() => {
    if (isChatOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isChatOpen]);

  // close chat window on click outside, node and buttonRef are areas to ignore
  const handleOutsideClick = () => {
    if(isChatOpen){
      dispatch(closeChat());
    saveLogToDB("chat closed by click outside");
    }
  };
  useOutsideClick([node, buttonRef], handleOutsideClick);

  useEffect(() => {
    if (knockKnock && messages.length === 0) {
      updateMessages({ role: "assistant", content: "Knock knock 😇" });
    }
  }, [knockKnock]);

  // scroll the chat window to the bottom whenever a new message is added to the messages state.
  useEffect(() => {
    if (messagesContainerRef.current && isChatOpen) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
    if (isChatOpen && messages.length === 0) {
      setTimeout(() => {
        updateMessages({ role: "assistant", content: "Hello 😉" });
      }, 2000);
    }
  }, [messages, isChatOpen]);

  const handleChatButton = () => {
    if (isChatOpen) {
      dispatch(closeChat());
      saveLogToDB("chat closed");
    } else {
      setWasOpened(true);
      dispatch(openChat());
      saveLogToDB("chat opened");
    }
  };

  const handleSendMessage = async () => {
    if (newMessage.trim() === "") return;
    setNewMessage("");
    updateMessages({ role: "user", content: newMessage });
    try {
      const assistant_response = await sendMessage(messages, newMessage);
      updateMessages({ role: "assistant", content: assistant_response });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div
      ref={node}
      className={`z-50 transition delay-1000 duration-[1500ms] ${
        isChatVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`fixed bottom-[9svh] right-1 z-50  h-[83svh] w-[90vw] flex-col p-1 drop-shadow-xl sm:w-[50vw] md:h-[65vh] md:w-[30vw]
        ${
          isChatOpen
            ? "slide-in-right flex"
            : wasOpened
            ? "slide-out-right flex"
            : "hidden"
        }`} //max-sm:left-1/2 max-sm:transform max-sm:-translate-x-1/2
      >
        <MessageList
          messages={messages}
          isTyping={isTyping}
          errorMessage={errorMessage}
          ref={messagesContainerRef}
        />
        <InputArea
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          handleKeyPress={handleKeyPress}
          handleSendMessage={handleSendMessage}
          ref={inputRef}
        />
      </div>
      <PopMessage
        showMessage={showMessage}
        isChatOpen={isChatOpen}
        messages={messages}
      />
      <ChatButton
        handleChatButton={handleChatButton}
        showMessage={showMessage}
        ref={buttonRef}
      />
    </div>
  );
}
