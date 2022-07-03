import React from "react";
import Country from "./Country";
import classes from "./CountriesList.module.css";

const CountriesList = ({
  countriesList,
  selectedRegion,
  typedCountry,
  countryId,
  passSelectedCountry
}) => {
  if (selectedRegion) {
    countriesList = countriesList.filter(
      (country) => country.countryRegion === selectedRegion
    );
  }

  if (typedCountry.trim().length > 0) {
    countriesList = countriesList.filter((country) =>
      country.countryName.toLowerCase().includes(typedCountry.toLowerCase())
    );
  }

  const passClickedCountry = (clickedId) => {
    passSelectedCountry(clickedId);
  }

  return (
    <section className={classes["countries-list"]}>
      {countriesList.map((country) => {
        return (
          <Country
            countryId={country.countryId}
            key={country.countryId}
            countryName={country.countryName}
            countryFlag={country.countryFlag}
            countryPopulation={country.countryPopulation}
            countryCapital={country.countryCapital}
            countryRegion={country.countryRegion}
            passClickedCountry={passClickedCountry}
          />
        );
      })}
    </section>
  );
};

export default CountriesList;
