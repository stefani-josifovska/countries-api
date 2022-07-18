import { createSlice } from "@reduxjs/toolkit";

const countriesSlice = createSlice({
  name: "countriesInfo",
  initialState: { countriesList: [] },
  reducers: {
    transformCountries(state, action) {
      const loadedCountries = [];
      const country = action.payload.countries;
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
      state.countriesList = loadedCountries;
    }
  },
});

export default countriesSlice;
export const countriesActions = countriesSlice.actions;
