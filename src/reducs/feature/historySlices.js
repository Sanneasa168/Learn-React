import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { bastUrl } from "../api/bastUrl";

const initialState = {
  events: [],
  eventId: {},
  status: "idle",
  error: null,
};

export const fetchEvents = createAsyncThunk("events/fetchEvents", async () => {
  const response = await fetch(`${bastUrl}athletes/`);
  const data = await response.json();
  console.log("event all api ", data.results);
  return data.results;
});

export const fetchEventById = createAsyncThunk("events/fetchEventById", async (id) => {
  const response = await fetch(`${bastUrl}athletes/${id}/`);
  const data = await response.json();
  console.log("event all api by id", data);
  return data;
});

export const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.events = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchEventById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEventById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.eventId = action.payload;
      })
      .addCase(fetchEventById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default eventSlice.reducer;

// Selectors
export const selectAllEvents = (state) => state.events.events                ;
export const selectEventById = (state) => state.events.eventId;
