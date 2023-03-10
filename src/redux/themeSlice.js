import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: JSON.parse(localStorage.getItem("theme"))
      ? JSON.parse(localStorage.getItem("theme"))
      : "light",
  },
  reducers: {
    change: (state) => {
      if (state.value == "light") {
        state.value = "dark";
      } else {
        state.value = "light";
      }
    },
  },
});

export const { change } = themeSlice.actions;

export default themeSlice.reducer;
