export default function Message({ role, content }) {
  return (
    <div
      className={`m-2 max-w-[80%] break-words p-2 ${
        role === "user"
          ? "self-end rounded-bl-xl rounded-tl-xl rounded-tr-xl border border-transparent bg-violet-700/70 text-white"
          : "self-start rounded-br-xl rounded-tl-xl rounded-tr-xl border border-violet-700/70 bg-gray-100/90 text-gray-800"
      }`}
    >
      {content}
    </div>
  );
}
