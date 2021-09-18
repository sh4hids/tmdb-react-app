import React from "react";
import styled from "styled-components";

import Box from "./Box";

const Wrapper = styled(Box)`
  margin: 0 auto;
  min-height: 300px;
  height: calc(100vh / 2.5);
  margin-bottom: ${({ theme }) => theme.space.xl}px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;

  background-image: url(${({ bgImage }) => bgImage});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const HeroSection = ({ imageLink, children, ...props }) => {
  return (
    <Wrapper p={3} bgImage={imageLink || "/images/hero-bg.jpg"} {...props}>
      {children}
    </Wrapper>
  );
};

export default HeroSection;
