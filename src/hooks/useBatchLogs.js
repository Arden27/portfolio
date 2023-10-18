// hook for adding log messages to log batch for future send to server

import { useDispatch } from 'react-redux';
import { useEffect, useRef } from "react";
import { addLog } from '@/redux/store';
import generateTimestamp from '@/utils/generateTimestamp';

export default function useBatchLogs(optionalOnRenderLogMessage) {
  const dispatch = useDispatch();

  // Reference to determine if it's the first invocation (useful to avoid redundant logs)
  const initialLoadRef = useRef(true);

  function addLogToBatch(message) {
    // Generate a standardized timestamp
    const logAt = generateTimestamp();

    // Dispatch the log action to the Redux store with the provided message and generated timestamp
    dispatch(addLog({ logMessage: message, logAt: logAt }));
  }

  // If a message is provided during hook invocation, it logs this message on the initial render
  useEffect(() => {
    if (optionalOnRenderLogMessage && initialLoadRef.current) {
      initialLoadRef.current = false;
      addLogToBatch(optionalOnRenderLogMessage);
    }
  }, []);  // Empty dependency array ensures this effect runs only once

  return { addLogToBatch };
}
