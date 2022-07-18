import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import Header from "./components/Header";
import "./App.css";
import CountryInfo from "./components/countriesComponents/CountryInfo";
import AllCountries from "./components/countriesComponents/AllCountries";

function App() {
  const isDarkModeEnabled = useSelector(
    (state) => state.mode.isDarkModeEnabled
  );

  return (
    <div
      style={{
        backgroundColor: isDarkModeEnabled
          ? "hsl(207, 26%, 17%)"
          : "hsl(0, 0%, 98%)",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Route path="/" exact>
        <Redirect to="/countries" />
      </Route>
      <Route path="/countries-api" exact>
        <Redirect to="/countries" />
      </Route>
      <Route path="/countries" exact>
        <AllCountries />
      </Route>
      <Route path="/countries/:selectedCountry">
        <CountryInfo />
      </Route>
    </div>
  );
}

export default App;
