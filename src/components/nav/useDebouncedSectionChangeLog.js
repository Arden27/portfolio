import { useState } from "react";

function debounce(func, delay) {
    let debounceTimer;
    return function (...args) {
        const context = this;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
}

export default function useDebouncedSectionChangeLog(saveLogToDB) { // pass saveLogToDB as an argument
    const [lastLoggedSection, setLastLoggedSection] = useState(null);

    const debouncedSectionChangeLog = debounce((section) => {
        // Call the function directly without returning it
        if (section !== lastLoggedSection) {
            saveLogToDB(`scrolled to ${section}`);
            setLastLoggedSection(section);
        }
    }, 300);

    return { debouncedSectionChangeLog };
}
