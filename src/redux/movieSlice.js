import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import qs from "query-string";

import { apiUrl } from "../config";

const initialState = {
  list: { status: "idle" },
  popularMovies: { status: "idle" },
  latestMovies: { status: "idle" },
  details: {
    status: "idle",
  },
};

export const getMoviesAsync = createAsyncThunk(
  "movies/getMoviesAsync",
  async (queries = {}) => {
    const response = await axios.get(
      `${apiUrl}/movies?${qs.stringify(queries)}`
    );
    return response.data;
  }
);

export const getPopularMoviesAsync = createAsyncThunk(
  "movies/getPopularMoviesAsync",
  async (queries = {}) => {
    const response = await axios.get(`${apiUrl}/movies?sortBy=popularity.desc`);
    return response.data;
  }
);

export const getLatestMoviesAsync = createAsyncThunk(
  "movies/getLatestMoviesAsync",
  async (queries = {}) => {
    const response = await axios.get(
      `${apiUrl}/movies?sortBy=release_date.desc`
    );
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
      .addCase(getPopularMoviesAsync.pending, (state) => {
        state.popularMovies.status = "loading";
      })
      .addCase(getPopularMoviesAsync.fulfilled, (state, action) => {
        state.popularMovies.status = "idle";
        state.popularMovies.data = action.payload.data;
      });
    builder
      .addCase(getLatestMoviesAsync.pending, (state) => {
        state.latestMovies.status = "loading";
      })
      .addCase(getLatestMoviesAsync.fulfilled, (state, action) => {
        state.latestMovies.status = "idle";
        state.latestMovies.data = action.payload.data;
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
