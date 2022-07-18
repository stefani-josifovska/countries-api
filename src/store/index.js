import { configureStore } from '@reduxjs/toolkit';
import modeSlice from './modeSlice';
import countriesSlice from './countriesSlice';

const store = configureStore({
    reducer: { mode: modeSlice.reducer, countries: countriesSlice.reducer }
});

export default store;