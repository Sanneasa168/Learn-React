import { configureStore } from "@reduxjs/toolkit";
import { eventSlice } from "./historySlices";

export const store = configureStore({
  reducer: {
    event: eventSlice,
  },
});
