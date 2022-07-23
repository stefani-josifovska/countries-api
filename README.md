A solution to the following Frontend Mentor challenge: https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca

The point of the challenge was to fetch countries data from the REST Countries API (https://restcountries.com/), modify it and then show all of the countries in seperate cards. Additional features are:
1. Switching between dark/light mode;
2. Filtering countries by selected region;
3. Filtering countries by typed input (by name),
4. Viewing details of the neighbouring countries of the selected one.

This challenge was solved using the React.js framework. The data fetching was done using a custom hook (src -> hooks), and the data was first transformed and made available to all of the components using Context, but afterwards switched to React Redux (src -> store), using the redux toolkit.

Additionally, React Router (version 5) was implemented, in order to make it possible to access a specific country card directly.
