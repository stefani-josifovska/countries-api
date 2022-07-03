import React, { useContext } from "react";
import ModeContext from "../../context/mode-context";
import classes from "./CountryInfo.module.css";
import InfoButton from "../../UI/InfoButton";

const CountryInfo = ({
  countryInfo: country,
  goBackHandler,
  passSelectedCountry,
  allCountries,
}) => {
  const { isDarkModeEnabled } = useContext(ModeContext);

  const onGoBackHandler = () => {
    goBackHandler();
  };
  const langArray = Object.values(country.countryLanguages).join(", ");
  const nativeNameArray = Object.values(country.countryNativeName);
  const namesArray = [];
  nativeNameArray.forEach((name) => {
    namesArray.push(name.official);
  });
  const namesList = namesArray.join(", ");
  const currenciesArray = Object.values(country.countryCurrencies);
  const currArray = [];
  currenciesArray.forEach((currency) => {
    currArray.push(currency.name);
  });
  const currenciesList = currArray.join(", ");
  const borderCountries = Object.values(country.countryBorders);

  const passSelectedCountryKey = (e) => {
    passSelectedCountry(e.currentTarget.id);
  };

  const findCountryName = (countrySymbol) => {
    for (const i of allCountries) {
      if (i.countryId === countrySymbol) {
        return i.countryName;
      }
    }
  };

  return (
    <>
      <InfoButton
        type="button"
        className={classes.btn}
        onClick={onGoBackHandler}
      >
        Back
      </InfoButton>
      <div
        className={`${classes["country-info"]} ${
          isDarkModeEnabled ? classes["country-dark"] : ""
        }`}
      >
        <img src={country.countryFlag} alt="country flag"></img>
        <h1 className={classes["country-name"]}>{country.countryName}</h1>
        <div className={classes["info-first-part"]}>
          {
            <p>
              <b>Native Name: </b>
              {namesList}
            </p>
          }
          <p>
            <b>Population: </b>
            {country.countryPopulation}
          </p>
          <p>
            <b>Region: </b>
            {country.countryRegion}
          </p>
          <p>
            <b>Capital: </b>
            {country.countryCapital}
          </p>
        </div>
        <div className={classes["info-second-part"]}>
          <p>
            <b>Top Level Domain: </b>
            {country.countryTopLvlDomain}
          </p>
          {
            <p>
              <b>Currencies: </b>
              {currenciesList}
            </p>
          }
          {
            <p>
              <b>Languages: </b>
              {langArray}
            </p>
          }
        </div>
        <div className={classes.borders}>
          {borderCountries.length > 0 && (
            <p>
              <b>Border countries: </b>
            </p>
          )}
          {borderCountries.length > 0 &&
            borderCountries.map((borderCountry) => {
              return (
                <InfoButton
                  key={borderCountry}
                  id={borderCountry}
                  onClick={passSelectedCountryKey}
                  className={classes["info-button"]}
                >
                  {findCountryName(borderCountry)}
                </InfoButton>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default CountryInfo;
