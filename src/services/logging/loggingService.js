import { sliceLogs } from "@/redux/store";

const defaultInterval = 10000;

export function startLoggingService(store, interval = defaultInterval) {
  if (typeof window === "undefined") {
    return;
  }

  setInterval(() => {
    const currentLogs = store.getState().log.logs;
    if (currentLogs.length > 0) {
      // Send logs to the backend
      fetch("/api/db/batchLog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionId: store.getState().log.sessionId,
          logs: currentLogs,
        }),
      }).then((response) => {
        if (response.ok) {
          store.dispatch(sliceLogs(currentLogs.length));
        }
      });
    }
  }, interval);
}
