import React from "react";
import SendIcon from "@/../public/img/send.svg";

const SendIconNotActive = "rgba(156, 163, 175, .8)";
const chatIconColor = "rgba(109, 40, 217, .5)";

function InputArea(
  { newMessage, setNewMessage, handleKeyPress, handleSendMessage },
  ref,
) {
  return (
    <div className="flex h-14 pl-1 w-full items-center rounded-xl border border-primary bg-gray-100/80">
      <input
        ref={ref}
        name="newMessage"
        className="h-[90%] flex-grow rounded-xl bg-transparent p-2 focus:outline-none" //focus:ring-2 focus:ring-violet-700
        type="text"
        placeholder="Type a message"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyDown={handleKeyPress}
        autoComplete="off"
      />
      <button
        className="h-full rounded-r-xl bg-transparent p-1 pr-2 text-white"
        onClick={handleSendMessage}
      >
        <SendIcon
          className=" h-[70%] w-auto"
          fill={newMessage ? chatIconColor : SendIconNotActive}
        />
      </button>
    </div>
  );
}

export default React.forwardRef(InputArea);
