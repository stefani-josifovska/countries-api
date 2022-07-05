import React from "react";

const ModeContext = React.createContext({
    isDarkModeEnabled: false,
    setIsDarkModeEnabled: () => {},
    toggleMode: () => {}
});

export default ModeContext;