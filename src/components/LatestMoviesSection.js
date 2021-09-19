import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { format } from "date-fns";

import { tmdbImagePath } from "../config";
import { getLatestMoviesAsync } from "../redux/movieSlice";
import Box from "./Box";
import Text from "./Text";
import Image from "./Image";
import MoviePreviewCard from "./MoviePreviewCard";
import NoImage from "./NoImage";

const Wrapper = styled(Box)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  max-width: 1200px;
  overflow-x: scroll;
  overflow-y: hidden;
  transition: height 0.5s linear;
  margin-bottom: 32px;
`;

const LatestMoviesSection = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.latestMovies);

  console.log(movies);

  useEffect(() => {
    dispatch(getLatestMoviesAsync());
  }, [dispatch]);

  return (
    <Wrapper>
      {movies?.data?.results.map((movie) => (
        <Box ml={40} width={150} minWidth={150} key={movie.id}>
          <MoviePreviewCard>
            {movie.poster_path ? (
              <Image src={`${tmdbImagePath}/w500${movie.poster_path}`} />
            ) : (
              <NoImage />
            )}
          </MoviePreviewCard>
          <Box p="26px 10px 12px 10px;">
            <Link to={`/movies/${movie.id}`}>
              <Text m={0} variant="h6">
                {movie.title || movie.original_title}
              </Text>
            </Link>
            <Text m={0} variant="label1">
              {format(new Date(movie.release_date), "MMMM dd, yyyy")}
            </Text>
          </Box>
        </Box>
      ))}
    </Wrapper>
  );
};

export default LatestMoviesSection;
