import { useState, useEffect } from "react";

export default function usePopupMessage(messages, isChatOpen) {
    const [showMessage, setShowMessage] = useState(false);
  
    useEffect(() => {
      if (!isChatOpen && messages.length > 0 && messages[messages.length - 1].role === 'assistant') {
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 4000);
      }
    }, [messages]);
  
    return showMessage;
  }