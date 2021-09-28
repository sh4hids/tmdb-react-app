import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { tmdbImagePath } from "../config";
import { getMovieByIdAsync } from "../redux/movieSlice";
import { DetailsPageLayout } from "../layouts";
import {
  MovieDetailsCard,
  MovieCastSection,
  Container,
  Text,
  Box,
} from "../components";

export default function DetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const movieDetails = useSelector((state) => state.movies.details);

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
      title={movieDetails?.data?.title || movieDetails?.data?.original_title}
    >
      {movieDetails.data ? (
        <>
          <MovieDetailsCard movieData={movieDetails.data} />
          <Container>
            <Box p={3}>
              <Text variant="h4">Movie Cast</Text>
            </Box>
            <MovieCastSection cast={movieDetails.data?.credits?.cast ?? []} />
          </Container>
        </>
      ) : (
        <></>
      )}
    </DetailsPageLayout>
  );
}
