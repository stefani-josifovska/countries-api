import { useSelector } from "react-redux/es/exports";
import classes from "./InputForm.module.css";

const InputForm = ({ passInputCountry }) => {
  const isDarkModeEnabled = useSelector(
    (state) => state.mode.isDarkModeEnabled
  );

  const onCountryTypeHandler = (e) => {
    passInputCountry(e.target.value);
  };

  const preventSubmit = (e) => e.preventDefault();

  return (
    <form
      action=""
      className={classes["search-form"]}
      onSubmit={preventSubmit}
      style={{ position: "relative" }}
    >
      <svg
        className={classes["search-icon"]}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <title>Search</title>
        <path
          d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
          fill="none"
          stroke={isDarkModeEnabled ? "white" : "currentColor"}
          strokeMiterlimit="10"
          strokeWidth="32"
        />
        <path
          fill="none"
          stroke={isDarkModeEnabled ? "white" : "currentColor"}
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="32"
          d="M338.29 338.29L448 448"
        />
      </svg>
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={onCountryTypeHandler}
        className={
          isDarkModeEnabled ? classes["dark-input"] : classes["light-input"]
        }
      />
    </form>
  );
};

export default InputForm;
