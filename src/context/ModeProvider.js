import React, { useState } from "react";
import ModeContext from "./mode-context";

export const ModeProvider = (props) => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  const toggleMode = () => {
    setIsDarkModeEnabled((prev) => !prev);
  };
  const modeContext = {
    isDarkModeEnabled,
    setIsDarkModeEnabled,
    toggleMode,
  };

  return (
    <ModeContext.Provider value={modeContext}>
      {props.children}
    </ModeContext.Provider>
  );
};

export default ModeProvider;
