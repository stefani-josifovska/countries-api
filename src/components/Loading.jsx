import React from "react";
import { useSelector } from "react-redux/es/exports";
import classes from "./Loading.module.css";

const Loading = () => {
  const isDarkModeEnabled = useSelector(
    (state) => state.mode.isDarkModeEnabled
  );

  return (
    <div className={classes.loading}>
      <h2
        style={{
          color: isDarkModeEnabled
            ? "white"
            : "black"
        }}
      >
        Loading countries...
      </h2>
    </div>
  );
};

export default Loading;
