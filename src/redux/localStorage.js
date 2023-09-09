// Loads the state from localStorage
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Saves the specified parts of the state to localStorage
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify({
      cart: state.cart,
      items: state.items,
    });
    localStorage.setItem('state', serializedState);
  } catch {
    // ignore write errors
  }
};
