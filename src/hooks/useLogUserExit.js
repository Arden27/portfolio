import { useEffect, useRef } from "react";
import moment from "moment-timezone";
import { useSelector } from "react-redux";

export default function useLogUserExit() {
  // Check if we are on the client side
  if (typeof window === "undefined") {
    console.log("useLogUserExit runned on server, returned");
    return;
  }

  console.log("useLogUserExit runned on client-side");

  const sessionId = useSelector((state) => state.sessionId);
  const sessionIdRef = useRef(null);

  useEffect(() => {
    const checkSessionInterval = setInterval(() => {
      if (sessionId !== null && sessionId !== undefined) {
        sessionIdRef.current = sessionId;
        console.log("sessionId found and ref updated to: ", sessionId);
        clearInterval(checkSessionInterval);
      } else {
        console.log("sessionId is null or undefined from interval check");
      }
    }, 500); // check every half-second

    return () => clearInterval(checkSessionInterval); // cleanup
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

      const blob = new Blob([JSON.stringify(data)], {
        type: "application/json",
      });
      navigator.sendBeacon("/api/db/log", blob);
    }

    window.addEventListener("beforeunload", sendUserLeftLog);
    return () => window.removeEventListener("beforeunload", sendUserLeftLog);
  }, []);
}
