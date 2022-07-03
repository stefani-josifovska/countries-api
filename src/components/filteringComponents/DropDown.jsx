import React, { useState, useContext } from "react";
import ModeContext from "../../context/mode-context";
import classes from "./DropDown.module.css";

const regionsList = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const DropDown = ({ showRegionsHandler, passRegionFilter }) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const { isDarkModeEnabled } = useContext(ModeContext);

  const onButtonClickHandler = (e) => {
    e.preventDefault();
    setIsButtonClicked((prevValue) => !prevValue);
  };

  const onRegionClickHandler = (e) => {
    passRegionFilter(e.target.innerHTML);
  };

  return (
    <>
      <button
        onClick={onButtonClickHandler}
        className={`${classes["dropdown-button"]} ${
          isDarkModeEnabled ? classes["dropdown-dark"] : ""
        }`}
      >
        Filter by Region
      </button>
      {isButtonClicked && (
        <div
          className={`${classes["dropdown-content"]} ${
            isDarkModeEnabled ? classes["dropdown-dark"] : ""
          }`}
        >
          <ul className={classes["list-regions"]}>
            {regionsList.map((region) => {
              return (
                <li
                  onClick={onRegionClickHandler}
                  key={Math.random().toString()}
                >
                  {region}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default DropDown;
