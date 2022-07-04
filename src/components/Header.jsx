import React, { useContext } from "react";
import ModeContext from "../context/mode-context";
import classes from "./Header.module.css";

const Header = () => {
  const { isDarkModeEnabled, setIsDarkModeEnabled } = useContext(ModeContext);

  const toggleMode = () => {
    setIsDarkModeEnabled(prev => !prev);
  }

  return (
    <div className={`${classes.header} ${isDarkModeEnabled ? classes['header-dark'] : classes['header-light']}`}>
      <h2 className={isDarkModeEnabled ? classes['text-dark'] : ""}>Where in the world?</h2>
      <div className={classes["mode-switch"]} onClick={toggleMode}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ionicon"
          viewBox="0 0 512 512"
        >
          <title>Moon</title>
          <path
            d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
            fill={isDarkModeEnabled ? "white" : "transparent"}
            stroke={isDarkModeEnabled ? "white" : "currentColor"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
        </svg>
        <h3 className={isDarkModeEnabled ? classes['text-dark'] : ""}>{isDarkModeEnabled ? "Light mode" : "Dark mode"}</h3>
      </div>
    </div>
  );
};

export default Header;
