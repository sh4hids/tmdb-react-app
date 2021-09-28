import React from "react";
import styled from "styled-components";

import { tmdbImagePath } from "../config";
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

const MovieCastSection = ({ cast = [] }) => {
  return (
    <Wrapper>
      {cast.map((person) => (
        <Box ml={40} width={150} minWidth={150} key={person.id}>
          <MoviePreviewCard>
            <>
              {person.profile_path ? (
                <Image src={`${tmdbImagePath}/w500${person.profile_path}`} />
              ) : (
                <NoImage />
              )}
            </>
          </MoviePreviewCard>
          <Box p="26px 10px 12px 10px;">
            <Text m={0} variant="h6">
              {person.name}
            </Text>

            <Text m={0} variant="label1">
              {person.character}
            </Text>
          </Box>
        </Box>
      ))}
    </Wrapper>
  );
};

export default MovieCastSection;
