import React from "react";
import CountryCard from "../../UI/CountryCard";

const Country = ({
  countryName,
  countryFlag,
  countryPopulation,
  countryCapital,
  countryRegion,
  countryId,
}) => {

  return (
    <CountryCard id={countryId} >
      <img src={countryFlag} alt="" />
      <div>
        <h2>{countryName}</h2>
        <p><b>Population: </b>{countryPopulation}</p>
        <p><b>Region: </b>{countryRegion}</p>
        <p><b>Capital: </b>{countryCapital}</p>
      </div>
    </CountryCard>
  );
};

export default Country;
