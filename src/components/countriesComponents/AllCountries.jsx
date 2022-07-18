import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import useRequest from "../../hooks/use-request";
import { countriesActions } from "../../store/countriesSlice";
import Loading from "../Loading";
import InputForm from "../filteringComponents/InputForm";
import DropDown from "../filteringComponents/DropDown";
import CountriesList from "./CountriesList";
import classes from "./AllCountries.module.css";

const AllCountries = () => {
  const dispatch = useDispatch();
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [typedCountry, setTypedCountry] = useState("");

  const { isLoading, error, sendRequest: fetchCountries } = useRequest();

  const countriesList = useSelector((state) => state.countries.countriesList);

  useEffect(() => {
    const transformCountries = (data) => {
      dispatch(countriesActions.transformCountries({ countries: data }));
    };
    if (countriesList.length === 0) {
        fetchCountries("https://restcountries.com/v3.1/all", transformCountries);
    }
  }, [fetchCountries, dispatch, countriesList.length]);

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

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <div className={classes["dropdown-search"]}>
            <InputForm passInputCountry={passInputCountry} />
            <DropDown passRegionFilter={passRegionFilter} />
          </div>
          <CountriesList
            selectedRegion={selectedRegion}
            typedCountry={typedCountry}
          />
        </>
      )}
    </>
  );
};

export default AllCountries;
