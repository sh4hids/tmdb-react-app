import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "../styles/theme";
import GlobalStyle from "../styles/GlobalStyles";
import { Header, Container, SEO, HeroSection } from "../components";

const DefaultLayout = ({ children, title, description, url, image }) => {
  //   const context = useContext(ThemeContext);
  //   const selectedTheme = context.colorMode || "light";

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SEO title={title} description={description} url={url} image={image} />
      <Header
      // colorMode={context.colorMode}
      // setColorMode={context.setColorMode}
      />
      <Container p={3} pt={60}>
        <HeroSection />
        {children}
      </Container>
    </ThemeProvider>
  );
};

export default DefaultLayout;
