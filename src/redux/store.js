import { configureStore, createSlice } from "@reduxjs/toolkit";
import { generateSessionId } from "@/utils/generateSessionId";

// get session id from localSotrage or create one
const getInitialSessionId = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("sessionId") || generateSessionId();
  }
  return null; // Return null or some other value if on server-side
};

// App Slice
const appInitialState = {
  isChatOpen: false,
  wasChatOpened: false,
  knockKnock: false,
};

const appSlice = createSlice({
  name: "app",
  initialState: appInitialState,
  reducers: {
    openChat: (state) => {
      state.isChatOpen = true;
    },
    closeChat: (state) => {
      state.isChatOpen = false;
    },
    setWasChatOpened: (state) => {
      state.wasChatOpened = true;
    },
    knock: (state) => {
      state.knockKnock = true;
    },
  },
});

export const { openChat, closeChat, setWasChatOpened, knock } = appSlice.actions;

// Log Slice
const logInitialState = {
  sessionId: getInitialSessionId(),
  logs: [], // queue of logs
};

const logSlice = createSlice({
  name: "log",
  initialState: logInitialState,
  reducers: {
    // add log to the queue
    addLog: (state, action) => {
      const newLog = {
        logMessage: action.payload.message,
        logAt: action.payload.logAt,
      };
      state.logs.push(newLog);
    },
    // remove sent logs from log queue
    sliceLogs: (state, action) => {
      state.logs = state.logs.slice(action.payload);
    },
  },
});

export const { addLog, sliceLogs } = logSlice.actions;

// Combine reducers
const rootReducer = {
  app: appSlice.reducer,
  log: logSlice.reducer,
};

const store = configureStore({
  reducer: rootReducer,
});

// For this localStorage subscription, you'd need to access nested state
store.subscribe(() => {
  localStorage.setItem("sessionId", store.getState().log.sessionId);
});

export default store;
