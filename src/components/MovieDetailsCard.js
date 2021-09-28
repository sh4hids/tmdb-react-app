import styled from "styled-components";
import { format } from "date-fns";

import { tmdbImagePath } from "../config";
import toHourAndMinutes from "../utils/toHourAndMinutes";
import Box from "./Box";
import Container from "./Container";
import Image from "./Image";
import Text from "./Text";
import PercentageCircle from "./PercentageCircle";

const selectedJobs = ["Producer", "Director", "Screenplay"];

const Wrapper = styled(Box)`
  background-image: url(${({ bgImage }) => bgImage});

  background-position: right -200px top;
  background-size: cover;
  background-repeat: no-repeat;
  color: var(--color-light-1);

  .bg-wrapper {
    background-image: linear-gradient(
      to right,
      rgba(10.59%, 13.73%, 10.59%, 1) 150px,
      rgba(10.59%, 13.73%, 10.59%, 0.84) 100%
    );

    img {
      border-radius: 8px;
    }
  }
`;

const CastCard = ({ person }) => {
  if (selectedJobs.includes(person.job)) {
    return (
      <Box width={[1 / 2, 1 / 2, 1 / 3]} p={3}>
        <Text variant="h6" m={0}>
          {person.name}
        </Text>
        <Text m={0}>{person.job}</Text>
      </Box>
    );
  }

  return <></>;
};

const MovieDetailsCard = ({ movieData = {} }) => {
  return (
    <Wrapper
      bgImage={
        movieData.backdrop_path
          ? `${tmdbImagePath}/w1920_and_h800_multi_faces${movieData.backdrop_path}`
          : "/images/hero-bg.jpg"
      }
    >
      <div className="bg-wrapper">
        <Container p={3} pt={76}>
          <Box display="flex" flexWrap="wrap" mx={-3}>
            <Box width={[1, 1, 1 / 3]} p={3}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100%"
              >
                <Image src={`${tmdbImagePath}/w500${movieData.poster_path}`} />
              </Box>
            </Box>
            <Box width={[1, 1, 2 / 3]} p={3}>
              <Text variant="h2">
                {`${movieData.title || movieData.original_title} (${format(
                  new Date(movieData.release_date),
                  "yyyy"
                )})`}
              </Text>
              {movieData.runtime ? (
                <Box display="flex" flexWrap="wrap" mx={-3}>
                  {movieData.runtime && (
                    <Box width={[1 / 2, 1 / 2, 1 / 4]} p={3}>
                      <Text variant="h6">Runtime</Text>
                      <Text>{toHourAndMinutes(movieData.runtime)}</Text>
                    </Box>
                  )}
                  {movieData.vote_average && (
                    <Box width={[1 / 2, 1 / 2, 1 / 4]} p={3}>
                      <Text variant="h6">Ratings</Text>
                      <PercentageCircle
                        progress={movieData.vote_average * 10}
                        width={56}
                      />
                    </Box>
                  )}
                </Box>
              ) : (
                <></>
              )}

              {movieData.overview ? (
                <>
                  {movieData.tagline ? (
                    <Text fontStyle="italic" color="var(--color-light-0)">
                      {movieData.tagline}
                    </Text>
                  ) : (
                    <></>
                  )}
                  <Text>Overview</Text>
                  <Text>{movieData.overview}</Text>
                </>
              ) : (
                <></>
              )}

              {movieData.credits ? (
                <Box display="flex" flexWrap="wrap" mx={-3}>
                  {movieData.credits.crew.map((person) => (
                    <CastCard key={person.name + person.job} person={person} />
                  ))}
                </Box>
              ) : (
                <></>
              )}
            </Box>
          </Box>
        </Container>
      </div>
    </Wrapper>
  );
};

export default MovieDetailsCard;
