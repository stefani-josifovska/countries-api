import React, { useContext } from "react";
import ModeContext from "../context/mode-context";
import classes from "./InfoButton.module.css";

const InfoButton = (props) => {
  const { isDarkModeEnabled } = useContext(ModeContext);

  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className} ${isDarkModeEnabled ? classes['button-dark'] : ""}`}
      onClick={props.onClick}
      id={props.id}
    >
      {props.children}
    </button>
  );
};

export default InfoButton;
