import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Country from "./Country";
import classes from "./CountriesList.module.css";

const CountriesList = ({
  selectedRegion,
  typedCountry,
}) => {
  let countriesList = useSelector((state) => state.countries.countriesList);

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
  return (
    <section className={classes["countries-list"]}>
      {countriesList.map((country) => {
        return (
          <Link className={classes.link} style={{ textDecoration: 'none' }} to={`/countries/${country.countryId}`} key={Math.random().toString()}>
            <Country
              countryId={country.countryId}
              key={country.countryId}
              countryName={country.countryName}
              countryFlag={country.countryFlag}
              countryPopulation={country.countryPopulation}
              countryCapital={country.countryCapital}
              countryRegion={country.countryRegion}
            />
          </Link>
        );
      })}
    </section>
  );
};

export default CountriesList;
