// import React, { useContext } from "react";
// import ModeContext from "../context/mode-context";
import { useSelector } from "react-redux/es/exports";
import classes from "./InfoButton.module.css";

const InfoButton = (props) => {
  // const { isDarkModeEnabled } = useContext(ModeContext);
  const isDarkModeEnabled = useSelector(
    (state) => state.mode.isDarkModeEnabled
  );

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
