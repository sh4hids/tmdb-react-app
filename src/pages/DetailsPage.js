import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { format } from "date-fns";

import { tmdbImagePath } from "../config";
import { getMovieByIdAsync } from "../redux/movieSlice";
import { DetailsPageLayout } from "../layouts";
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
    <DetailsPageLayout
      image={
        movieDetails?.data?.backdrop_path
          ? `${tmdbImagePath}/w500${movieDetails.data.backdrop_path}`
          : ""
      }
    >
      <Text variant="h2">{movieDetails?.data?.title ?? "No title"}</Text>
      <Text variant="label1">
        Release date:{" "}
        {movieDetails?.data?.release_date
          ? format(new Date(movieDetails.data.release_date), "MMMM dd, yyyy")
          : ""}
      </Text>
      <Text variant="label1">{movieDetails?.data?.tagline ?? "No title"}</Text>
      <Text variant="h4">Overview</Text>
      <Text>{movieDetails?.data?.overview ?? ""}</Text>
      <Text variant="h6">Genres</Text>
      <ul>
        {movieDetails?.data?.genres.map((genre) => (
          <li>{genre.name}</li>
        ))}
      </ul>
    </DetailsPageLayout>
  );
}
