import { useEffect, useRef } from 'react';
import { startLoggingService } from '@/services/loggingService';
import store from '@/redux/store';

export default function useLoggingService() {
  const serviceStarted = useRef(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !serviceStarted.current) {
      startLoggingService(store);
      serviceStarted.current = true;
    }
  }, []);
}
