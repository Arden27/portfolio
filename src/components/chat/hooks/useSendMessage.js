import { useState } from "react";
import moment from "moment-timezone";

export default function useSendMessage(sessionId) {
  const [isTyping, setIsTyping] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function sendMessage(messages, newMessage) {
    return new Promise(async (resolve, reject) => {
      if (newMessage.trim() === "") {
        reject(new Error("Message cannot be empty"));
        return;
      }

      setErrorMessage("");

      const sentAt = moment()
        .tz("Europe/Warsaw")
        .format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");

      setTimeout(async () => {
        setIsTyping(true);
        try {
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
            reject(new Error(data.error.message));
          } else if (!response.ok) {
            setIsTyping(false);
            const errorText = await response.text();
            setErrorMessage(
              "Error calling chat API: " + response.status.toString(),
            );
            console.error("OpenAI Error:", errorText);
            reject(new Error(errorText));
          } else {
            const data = await response.json();
            const assistant_response = data.choices[0].message.content;
            const receivedAt = moment()
              .tz("Europe/Warsaw")
              .format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");

            setIsTyping(false);
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
            resolve(assistant_response);
          }
        } catch (error) {
          setIsTyping(false);
          setErrorMessage("Error calling the server: " + error.toString());
          reject(error);
        }
      }, 500);
    });
  }

  return { sendMessage, isTyping, errorMessage };
}
