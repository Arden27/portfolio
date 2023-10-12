// hook for triggering popup mssage

import { useState, useEffect } from "react";

export default function usePopupMessage(messages, isChatOpen) {
    const [showMessage, setShowMessage] = useState(false);
    
    // when message array is changing and the chat window is closed return true for selected time
    useEffect(() => {
      if (!isChatOpen && messages.length > 0 && messages[messages.length - 1].role === 'assistant') {
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 4000);
      }
    }, [messages]);
  
    return showMessage;
  }