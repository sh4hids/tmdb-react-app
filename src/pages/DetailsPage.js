import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getMovieByIdAsync } from "../redux/movieSlice";
import { DefaultLayout } from "../layouts";
import { Text } from "../components";

export default function DetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const movieDetails = useSelector((state) => state.movies.details);

  console.log(movieDetails);

  useEffect(() => {
    if (id) {
      dispatch(getMovieByIdAsync(id));
    }
  }, [dispatch, id]);

  return (
    <DefaultLayout>
      <Text variant="h1">Total movies: {movieDetails?.title ?? 0}</Text>
    </DefaultLayout>
  );
}
