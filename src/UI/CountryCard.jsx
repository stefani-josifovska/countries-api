import { useSelector } from "react-redux/es/exports";
import classes from './CountryCard.module.css';

const CountryCard = (props) => {
    const isDarkModeEnabled = useSelector(
        (state) => state.mode.isDarkModeEnabled
      );

    return <section onClick={props.onClick} className={`${classes.country} ${isDarkModeEnabled ? classes['country-dark'] : ""}`}>
        {props.children}
    </section>
};

export default CountryCard;