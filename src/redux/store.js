import { configureStore, createSlice } from "@reduxjs/toolkit";
// import { loadState, saveState } from './localStorage';

// const persistedState = loadState();

const initialState = {
  isChatOpen: false,
  knockKnock: false,
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
    resetStore: () => initialState,
  },
});

export const { openChat, closeChat, knock, resetStore } = appSlice.actions;

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

export default store;
