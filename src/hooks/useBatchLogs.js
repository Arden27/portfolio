import { useDispatch } from 'react-redux';
import { useEffect, useRef } from "react";
import { addLog } from './logsSlice';
import generateTimestamp from '@/utils/generateTimestamp';

export default function useBatchLogs(optionalOnRenderLogMessage) {
  const dispatch = useDispatch();
  const initialLoadRef = useRef(true); // to prevent double logging on double invocation

  function addLogToBatch(message) {
    const logAt = generateTimestamp();
    dispatch(addLog({ logMessage: message, logAt }));
  }

  // optional logging of component render
  useEffect(() => {
    if (optionalOnRenderLogMessage && initialLoadRef.current) {
      initialLoadRef.current = false;
      addLogToBatch(optionalOnRenderLogMessage);
    }
  }, []);

  return { addLogToBatch };
}
