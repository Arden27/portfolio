import React from "react";
import Message from "./Message";

function MessageList({ messages, isTyping, errorMessage }, ref) {
  return (
    <div
      className={
        "scrollable-chat mb-1 flex flex-grow flex-col-reverse overflow-y-auto rounded-xl border border-primary bg-gray-100/80"
      }
      ref={ref}
    >
      {isTyping && (
        <div className="m-2 max-w-[80%] animate-pulse self-start break-words rounded-br-xl rounded-tl-xl rounded-tr-xl border border-violet-700/70 bg-gray-200/90 p-2 px-3">
          ○○○
        </div>
      )}
      {errorMessage && (
        <div className="m-2 max-w-[80%] animate-pulse self-start break-words rounded-br-xl rounded-tl-xl rounded-tr-xl border border-violet-700/70 bg-gray-200/90 p-2 px-3 text-red-400">
          {errorMessage}
        </div>
      )}
      {[...messages].reverse().map((message, index) => (
        <Message key={index} role={message.role} content={message.content} />
      ))}
    </div>
  );
}

export default React.forwardRef(MessageList);
