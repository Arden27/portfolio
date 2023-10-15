// hook for sending fire-and-forget log to the server 
// when user closes the page/browser of navigates to another page
// shoud be added at the root page of the app

import { useEffect, useRef } from "react";
import moment from "moment-timezone";
import { useSelector } from "react-redux";

export default function useLogUserExit() {
  // Check if we are on the client side
  if (typeof window === "undefined") return;

  const sessionId = useSelector((state) => state.sessionId);
  const sessionIdRef = useRef(null);

  // sessionRef with useEffect used to set sessionId in case if
  // redux hook fired before redux creates the id
  useEffect(() => {
    if (sessionId !== null && sessionId !== undefined) {
      sessionIdRef.current = sessionId;
    }
  }, [sessionId]);

  useEffect(() => {
    function sendUserLeftLog() {
      const logAt = moment()
        .tz("Europe/Warsaw")
        .format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
      const data = {
        logMessage: "User left",
        sessionId: sessionIdRef.current,
        logAt: logAt,
      };

      // the navigator.sendBecon by default send text/plain;charset=UTF-8
      // By wrapping the data in a Blob and specifying the MIME type as application/json, 
      // you're explicitly setting the content type to be JSON. 
      // This way, the server knows how to interpret the incoming data correctly.
      const blob = new Blob([JSON.stringify(data)], {
        type: "application/json",
      });
      // to fire-and-forget log
      navigator.sendBeacon("/api/db/log", blob);
    }
    // event listener with "beforeunload" param used to catch the 
    // user closing browser/tab or navigates to another page
    window.addEventListener("beforeunload", sendUserLeftLog);
    return () => window.removeEventListener("beforeunload", sendUserLeftLog);
  }, []);
}
