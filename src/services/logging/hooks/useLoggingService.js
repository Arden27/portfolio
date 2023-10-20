import { useEffect, useRef } from 'react';
import { startLoggingService } from '@/services/logging/loggingService';
import useSaveLogToDB from './useSaveLogToDB';
import useSendExitLogBatch from './useSendExitLogBatch';
import store from '@/redux/store';

export default function useLoggingService(onStartLogMessage, onExitLogMessage) {
  const serviceStarted = useRef(false);

  useSaveLogToDB(onStartLogMessage);
  useSendExitLogBatch(onExitLogMessage);

  useEffect(() => {
    if (typeof window !== 'undefined' && !serviceStarted.current) {
      startLoggingService(store);
      serviceStarted.current = true;
    }
  }, []);
}
