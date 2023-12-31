import { useSelector } from "react-redux";

export default function useSaveMessagesToDB() {
    const sessionId = useSelector((state) => state.log.sessionId)
    async function saveMessagesToDB(newMessage, assistant_response, sentAt, receivedAt) {
      try {
        const response = await fetch("/api/db/chat", {
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
        if (!response.ok) {
          // Log the error to the console (or other logging mechanism)
          console.error('DB Error:', await response.text());
        }
      } catch (error) {
        // Log any network or other asynchronous errors
        console.error('DB Error:', error);
      }
    }
  
    return { saveMessagesToDB };
  }
  