import React, { useEffect, useState } from "react";
import ModeContext from "./context/mode-context";
import useRequest from "./hooks/use-request";
import Header from "./components/Header";
import InputForm from "./components/filteringComponents/InputForm";
import "./App.css";
import CountriesList from "./components/countriesComponents/CountriesList";
import DropDown from "./components/filteringComponents/DropDown";
import CountryInfo from "./components/countriesComponents/CountryInfo";
import Loading from "./components/Loading";
import classes from './AppStyle.module.css';

function App() {
  const [countriesList, setCountriesList] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [typedCountry, setTypedCountry] = useState("");
  const [isCountrySelected, setIsCountrySelected] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({});

  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  const { isLoading, error, sendRequest: fetchCountries } = useRequest();

  useEffect(() => {
    const loadedCountries = [];
    const transformCountries = (country) => {
      for (let i = 0; i < country.length; i++) {
        loadedCountries.push({
          countryId: country[i].cca3,
          countryName: country[i].name.common,
          countryPopulation: country[i].population.toLocaleString(),
          countryRegion: country[i].region,
          countryCapital: country[i].capital,
          countryFlag: country[i].flags.png,
          countryNativeName: country[i].name.nativeName,
          countrySubregion: country[i].subregion,
          countryTopLvlDomain: country[i].tld,
          countryCurrencies: country[i].currencies,
          countryLanguages: country[i].languages,
          countryBorders: country[i].borders ? country[i].borders : [],
        });
      }
      setCountriesList(loadedCountries);
    };

    fetchCountries("https://restcountries.com/v3.1/all", transformCountries);
  }, [fetchCountries]);

  if (error) {
    return <p>{error}</p>;
  }

  const passRegionFilter = (region) => {
    setSelectedRegion(region);
  };

  const passInputCountry = (inputCountry) => {
    setTypedCountry(inputCountry);
    setSelectedRegion(null);
  };

  const passSelectedCountry = (selectedId) => {
    setIsCountrySelected(true);
    for (const country of countriesList) {
      if (country.countryId === selectedId) {
        setSelectedCountry(country);
        break;
      }
    }
  };

  const goBackHandler = () => {
    setIsCountrySelected(false);
    setTypedCountry("");
    setSelectedRegion(null);
  };

  return (
    <div
      style={{
        backgroundColor: isDarkModeEnabled
          ? "hsl(207, 26%, 17%)"
          : "hsl(0, 0%, 98%)",
        minHeight: "100vh",
      }}
    >
      <ModeContext.Provider value={{ isDarkModeEnabled, setIsDarkModeEnabled }}>
        <Header />
        {isLoading && <Loading />}
        {!isLoading && !isCountrySelected && (
          <>
            <div className={classes['dropdown-search']}>
              <InputForm passInputCountry={passInputCountry} />
              <DropDown passRegionFilter={passRegionFilter} />
            </div>
            <CountriesList
              passSelectedCountry={passSelectedCountry}
              countriesList={countriesList}
              selectedRegion={selectedRegion}
              typedCountry={typedCountry}
            />
          </>
        )}
        {!isLoading && isCountrySelected && (
          <CountryInfo
            countryInfo={selectedCountry}
            goBackHandler={goBackHandler}
            passSelectedCountry={passSelectedCountry}
            allCountries={countriesList}
          />
        )}
      </ModeContext.Provider>
    </div>
  );
}

export default App;
