export default function PopMessage({ showMessage, isChatOpen, messages }) {
  return (
    <div
      className={`scrollable-chat fixed bottom-[9svh] right-5 z-50 max-h-[40%] max-w-[40%] overflow-scroll break-words rounded-bl-xl rounded-tl-xl rounded-tr-xl border border-violet-700/70 bg-gray-100/70 p-2 text-gray-800 md:max-w-[25%]
        ${
          showMessage && !isChatOpen
            ? "block"
            : "hidden opacity-0 transition-opacity duration-[4000ms]"
        }`}
    >
      {messages.length > 0 && messages[messages.length - 1].content}
    </div>
  );
}
