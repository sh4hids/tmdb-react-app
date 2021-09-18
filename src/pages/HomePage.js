import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getMoviesAsync } from "../redux/movieSlice";
import { Text } from "../components";
import { DefaultLayout } from "../layouts";

export default function HomePage() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.list);

  console.log(movies);

  useEffect(() => {
    dispatch(getMoviesAsync());
  }, [dispatch]);

  return (
    <DefaultLayout>
      <Text variant="h1">Total movies: {movies?.data?.totalResults ?? 0}</Text>
    </DefaultLayout>
  );
}
