import { createSlice } from "@reduxjs/toolkit";

const modeSlice = createSlice({
  name: "mode",
  initialState: { isDarkModeEnabled: false },
  reducers: {
    toggleMode(state) {
      state.isDarkModeEnabled = !state.isDarkModeEnabled;
    },
  },
});

export default modeSlice;
export const modeActions = modeSlice.actions;
