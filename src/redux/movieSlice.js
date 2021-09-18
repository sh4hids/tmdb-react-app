import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { apiUrl } from "../config";

const initialState = {
  list: { status: "idle" },
  details: {
    status: "idle",
  },
};

export const getMoviesAsync = createAsyncThunk(
  "movies/getMoviesAsync",
  async () => {
    const response = await axios.get(`${apiUrl}/movies`);
    return response.data;
  }
);

export const getMovieByIdAsync = createAsyncThunk(
  "movies/getMovieByIdAsync",
  async (id) => {
    const response = await axios.get(`${apiUrl}/movies/${id}`);
    return response.data;
  }
);

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesAsync.pending, (state) => {
        state.list.status = "loading";
      })
      .addCase(getMoviesAsync.fulfilled, (state, action) => {
        state.list.status = "idle";
        state.list.data = action.payload.data;
      });
    builder
      .addCase(getMovieByIdAsync.pending, (state) => {
        state.details.status = "loading";
      })
      .addCase(getMovieByIdAsync.fulfilled, (state, action) => {
        state.details.status = "idle";
        state.details.data = action.payload.data;
      });
  },
});

export const { addTodo, toggleComplete, deleteTodo } = movieSlice.actions;

export default movieSlice.reducer;
