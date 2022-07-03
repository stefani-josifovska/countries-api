import React, { useContext } from "react";
import ModeContext from "../context/mode-context";
import classes from './CountryCard.module.css';

const CountryCard = (props) => {
    const { isDarkModeEnabled } = useContext(ModeContext)

    return <section onClick={props.onClick} className={`${classes.country} ${isDarkModeEnabled ? classes['country-dark'] : ""}`}>
        {props.children}
    </section>
};

export default CountryCard;