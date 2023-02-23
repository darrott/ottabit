import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../redux/themeSlice";

export default configureStore({
  reducer: {
    theme: themeSlice,
  },
});
