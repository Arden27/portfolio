import { useState, useEffect } from "react";
import { generateSessionId } from "@/components/generSessionId";

export default function useSessionId() {
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

  return sessionId;
}
