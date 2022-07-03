import React from "react";
import classes from './Loading.module.css'

const Loading = () => {
  return (
    <div className={classes.loading}>
      <h2>Loading countries...</h2>
    </div>
  );
};

export default Loading;
