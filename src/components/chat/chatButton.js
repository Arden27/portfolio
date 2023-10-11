import React from "react";
import ChatIcon from "@/../public/img/chat.svg";

const chatIconColor = "rgba(109, 40, 217, .5)";

function ChatButton({ handleChatButton, showMessage }, ref) {
  return (
    <button
      className="fixed bottom-1 right-1 z-50"
      ref={ref}
      onClick={handleChatButton}
    >
      <ChatIcon
        className={`h-auto w-[9svh] scale-x-[-1] transform rounded-xl border border-primary bg-gray-100/50 p-1 px-2 hover:bg-gray-100/80 
        ${showMessage ? "animate-pulse" : ""}`}
        fill={chatIconColor}
        stroke="3"
      />
    </button>
  );
}

export default React.forwardRef(ChatButton);
