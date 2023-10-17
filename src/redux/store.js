import { configureStore, createSlice } from "@reduxjs/toolkit";
import { generateSessionId } from "@/utils/generateSessionId";
// import { loadState, saveState } from './localStorage';

// const persistedState = loadState();
const getInitialSessionId = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("sessionId") || generateSessionId();
  }
  return null; // Return null or some other value if on server-side
};

const initialState = {
  isChatOpen: false,
  knockKnock: false,
  sessionId: getInitialSessionId(),
  logs: [],
};

// const preloadedState = {
//   ...initialState,
//   ...persistedState,
// };

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    openChat: (state) => {
      state.isChatOpen = true;
    },
    closeChat: (state) => {
      state.isChatOpen = false;
    },
    knock: (state) => {
      state.knockKnock = true;
    },
    addLog: (state, action) => {
      newLog = {
        logMessage: action.payload.message,
        logAt: action.payload.logAt,
      };
      state.logs.push(mewLog);
    },
    resetStore: () => initialState,
  },
});

export const { openChat, closeChat, knock, addLog, resetStore } = appSlice.actions;

const store = configureStore({
  reducer: appSlice.reducer,
  // preloadedState: preloadedState
});

// Save state to localStorage whenever it changes
// store.subscribe(() => {
//   saveState({
//     items: store.getState().items,
//     cart: store.getState().cart,
//   });
// });

store.subscribe(() => {
  localStorage.setItem("sessionId", store.getState().sessionId);
});

export default store;
