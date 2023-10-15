import moment from "moment-timezone";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

export default function useSaveLogToDB(optionalOnRenderLogMessage) {
  const initialLoadRef = useRef(true); // to prevent double logging on double invocation
  const sessionId = useSelector((state) => state.sessionId)

  function saveLogToDB(logMessage) {
    if (typeof window === undefined) return;
    
    const logAt = moment()
      .tz("Europe/Warsaw")
      .format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");

    fetch("/api/db/log", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        logMessage: logMessage,
        sessionId: sessionId,
        logAt: logAt,
      }),
    });
  }
  // optional logging of component render
  useEffect(() => {
    if(optionalOnRenderLogMessage && initialLoadRef.current){
      initialLoadRef.current = false;
      saveLogToDB(optionalOnRenderLogMessage);
    }
  }, []);

  return { saveLogToDB };
}