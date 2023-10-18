import generateTimestamp from "@/utils/generateTimestamp";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addLog } from "@/redux/store";

export default function useSaveLogToDB(optionalOnRenderLogMessage) {
  const dispatch = useDispatch();
  const initialLoadRef = useRef(true); // to prevent double logging on double invocation
  const sessionId = useSelector((state) => state.sessionId);
  //const logs = useSelector((state) => state.logs);

  function saveLogToDB(logMessage, immediate = false) {
    if (typeof window === undefined) return;

    const logAt = generateTimestamp();

    if (immediate) {
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
    } else {
      const batchedMessage = `${logMessage}` + " (batched)";
      dispatch(addLog({ message: batchedMessage, logAt: logAt }));
    }
  }
  // optional logging of component render
  useEffect(() => {
    if (optionalOnRenderLogMessage && initialLoadRef.current) {
      initialLoadRef.current = false;
      saveLogToDB(optionalOnRenderLogMessage, true);
    }
  }, []);

  return { saveLogToDB };
}
