"use client";

import { useState, useEffect, useRef } from "react";
import { generateSessionId } from "@/components/generSessionId";

import MessageList from "./TMessageList";
import InputArea from "./TInputArea";
import PopMessage from "./TPopMessage";
import ChatButton from "./TChatButton";

import { useSelector, useDispatch } from "react-redux";
import { openChat, closeChat } from "@/redux/store";
import moment from "moment-timezone";

const chatIconColor = "rgba(109, 40, 217, .5)";

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
  const [errorMessage, setErrorMessage] = useState("");
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
    dispatch(closeChat());
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
    if (knockKnock && messages.length === 0) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: "Knock knock 😇" },
      ]);
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
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: "assistant", content: "Hello 😉" },
        ]);
      }, 2000);
    }
  }, [messages, isChatOpen]);

  useEffect(() => {
    if (
      !isChatOpen &&
      messages.length > 0 &&
      messages[messages.length - 1].role === "assistant"
    ) {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 4000);
    }
  }, [messages]);

  const handleChatButton = () => {
    if (isChatOpen) {
      dispatch(closeChat());
    } else {
      setWasOpened(true);
      dispatch(openChat());
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;
    setNewMessage("");
    setErrorMessage("");

    const sentAt = moment()
      .tz("Europe/Warsaw")
      .format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");

    // First update the local state
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: newMessage },
    ]);

    setTimeout(async () => {
      setIsTyping(true);
      try {
        // The API expects the messages in the order they were exchanged
        const updatedMessages = [
          ...messages,
          { role: "user", content: newMessage }, // Add the new user message to the end
        ];

        const response = await fetch("/api/openai", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ messages: updatedMessages }),
        });

        if (response.status === 429) {
          const data = await response.json();
          const regex = /Please try again in (\d+)s\./;
          const matches = data.error.message.match(regex);
          if (matches && matches[1]) {
            const waitTimeSeconds = parseInt(matches[1]);
            console.error(
              "Rate limit reached. Please wait for",
              waitTimeSeconds,
              "seconds...",
            );
            setErrorMessage(
              `Rate limit reached. Please wait for ${waitTimeSeconds} seconds...`,
            );
          }
          setIsTyping(false);
        } else if (!response.ok) {
          setIsTyping(false);
          setErrorMessage(
            "Error calling chat API: " + response.status.toString(),
          );
          console.error("OpenAI Error:", await response.text());
        } else {
          // code for successful response
          const data = await response.json();
          const assistant_response = data.choices[0].message.content;

          const receivedAt = moment()
            .tz("Europe/Warsaw")
            .format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");

          // Update the state to include the assistant's reply
          setMessages((prevMessages) => [
            ...prevMessages,
            { role: "assistant", content: assistant_response },
          ]);
          setIsTyping(false);
          // Here you call the database endpoint
          await fetch("/api/db/chat", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userMessage: newMessage,
              assistantMessage: assistant_response,
              sessionId: sessionId,
              sentAt: sentAt,
              receivedAt: receivedAt,
            }),
          });
        }
      } catch (error) {
        setIsTyping(false);
        setErrorMessage("Error calling the server: " + error.toString());
      }
    }, 500);
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
