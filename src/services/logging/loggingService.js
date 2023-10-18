import { sliceLogs } from "@/redux/store";

const defaultInterval = 10000; // Default interval: 60 seconds

export function startLoggingService(store, interval = defaultInterval) {
  if (typeof window === "undefined") {
    return;
  }

  console.log("starting logging service");
  setInterval(() => {
    const currentLogs = store.getState().logs;
    console.log("log batch before send", currentLogs);
    if (currentLogs.length > 0) {
      // Send logs to the backend
      fetch("/api/db/batchLog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionId: store.getState().sessionId,
          logs: currentLogs,
        }),
      }).then((response) => {
        if (response.ok) {
          store.dispatch(sliceLogs(currentLogs.length));
          console.log(`batch with ${currentLogs.length} logs sent succesfully`);
          console.log(`batch after send: `, store.getState().logs);
        } else {
          console.error("Failed to send logs");
        }
      });
    } else {
      console.log("Batch is empty");
    }
  }, interval);
}
