import styled from "styled-components";

import Box from "./Box";

const MoviePreviewCard = styled(Box)`
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  border-radius: 8px;
  width: 100%;
  min-height: calc(150px * 1.5);
  height: calc(150px * 1.5);
  background: #dbdbdb;
  overflow: hidden;
`;

export default MoviePreviewCard;
