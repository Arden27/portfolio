import { useState, useEffect } from "react";

/**
 * Custom hook to manage chat messages.
 * This hook encapsulates both the messages state and the synchronization with local storage.
 * While this might seem to go against the Single-Responsibility Principle (SRP),
 * in this case, it's a pragmatic decision based on the tight inter-dependency between
 * messages and their representation in local storage. By encapsulating both concerns
 * within a single hook, we achieve a clean, easy-to-use interface for managing messages
 * in the consuming components, while keeping the synchronization logic encapsulated
 * and centralized, which can be particularly beneficial in a larger or more complex codebase.
 * 
 * @returns {Array} - An array where the first element is the messages state
 *                    and the second element is a function to update the messages.
 */
export default function useMessages() {
    // State to hold the messages
    const [messages, setMessages] = useState([]);
  
    // Effect to initialize messages from local storage on mount
    useEffect(() => {
      const storedMessages = localStorage.getItem("messages");
      if (storedMessages) {
        // Parse and set the messages if found in local storage
        setMessages(JSON.parse(storedMessages));
      }
    }, []);
  
    /**
     * Updates the messages state and optionally syncs with local storage.
     * 
     * @param {Array|Object} newMessages - The new message(s) to be added.
     * @param {boolean} [syncWithLocalStorage=true] - Whether to sync the updated messages with local storage.
     */
    const updateMessages = (newMessages, syncWithLocalStorage = true) => {
      setMessages(prevMessages => {
        // Determine if newMessages is an array or a single object
        const updatedMessages = Array.isArray(newMessages)
          ? [...prevMessages, ...newMessages]  // Merge arrays if it's an array
          : [...prevMessages, newMessages];   // Append object if it's a single object
        
        // Sync with local storage if the flag is true
        if (syncWithLocalStorage) {
          localStorage.setItem("messages", JSON.stringify(updatedMessages));
        }
        return updatedMessages;
      });
    };
  
    // Return both the messages state and the update function
    return [messages, updateMessages];
}
