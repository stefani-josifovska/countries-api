import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useParams } from "react-router-dom";
import useRequest from "../../hooks/use-request";
import { useEffect } from "react";
import { countriesActions } from "../../store/countriesSlice";
import InfoButton from "../../UI/InfoButton";
import classes from "./CountryInfo.module.css";
import Loading from "../Loading";

const CountryInfo = ({ goBackHandler }) => {
  const param = useParams();
  const dispatch = useDispatch();

  const isDarkModeEnabled = useSelector(
    (state) => state.mode.isDarkModeEnabled
  );

  const { isLoading, error, sendRequest: fetchCountries } = useRequest();

  const accessToCountriesList = useSelector(
    (state) => state.countries.countriesList
  );

  useEffect(() => {
    const transformCountries = (data) => {
      dispatch(countriesActions.transformCountries({ countries: data }));
    };
    if (accessToCountriesList.length === 0) {
      fetchCountries("https://restcountries.com/v3.1/all", transformCountries);
    }
  }, [fetchCountries, dispatch, accessToCountriesList.length]);

  if (error) {
    return <p>{error}</p>;
  }

  const currentCountry = accessToCountriesList.find(
    (country) => country.countryId === param.selectedCountry
  );

  const onGoBackHandler = () => {
    goBackHandler();
  };

  if (isLoading) {
    return <Loading />;
  }

  if (!currentCountry) {
    return (
      <>
        <h1
          style={{
            textAlign: "center",
            color: isDarkModeEnabled ? "white" : "black",
          }}
        >
          country not found
        </h1>
        <Link className={classes.link} to="/countries">
        <InfoButton
          type="button"
          className={classes.btn}
          onClick={onGoBackHandler}
        >
          Back
        </InfoButton>
      </Link>
      </>
    );
  }

  const langArray = Object.values(currentCountry.countryLanguages).join(", ");
  const nativeNameArray = Object.values(currentCountry.countryNativeName);
  const namesArray = [];
  nativeNameArray.forEach((name) => {
    namesArray.push(name.official);
  });
  const namesList = namesArray.join(", ");
  const currenciesArray = Object.values(currentCountry.countryCurrencies);
  const currArray = [];
  currenciesArray.forEach((currency) => {
    currArray.push(currency.name);
  });
  const currenciesList = currArray.join(", ");
  const borderCountries = Object.values(currentCountry.countryBorders);

  const findCountryName = (countrySymbol) => {
    for (const i of accessToCountriesList) {
      if (i.countryId === countrySymbol) {
        return i.countryName;
      }
    }
  };

  return (
    <>
      <Link className={classes.link} to="/countries">
        <InfoButton
          type="button"
          className={classes.btn}
          onClick={onGoBackHandler}
        >
          Back
        </InfoButton>
      </Link>
      <div
        className={`${classes["country-info"]} ${
          isDarkModeEnabled ? classes["country-dark"] : ""
        }`}
      >
        <img src={currentCountry.countryFlag} alt="country flag"></img>
        <h1 className={classes["country-name"]}>
          {currentCountry.countryName}
        </h1>
        <div className={classes["info-first-part"]}>
          <p>
            <b>Native Name: </b>
            {namesList}
          </p>
          <p>
            <b>Population: </b>
            {currentCountry.countryPopulation}
          </p>
          <p>
            <b>Region: </b>
            {currentCountry.countryRegion}
          </p>
          <p>
            <b>Capital: </b>
            {currentCountry.countryCapital}
          </p>
        </div>
        <div className={classes["info-second-part"]}>
          <p>
            <b>Top Level Domain: </b>
            {currentCountry.countryTopLvlDomain}
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
                <Link
                  to={`/countries/${borderCountry}`}
                  key={Math.random().toString()}
                >
                  <InfoButton
                    key={borderCountry}
                    id={borderCountry}
                    className={classes["info-button"]}
                  >
                    {findCountryName(borderCountry)}
                  </InfoButton>
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default CountryInfo;
