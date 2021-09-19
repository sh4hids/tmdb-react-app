import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "../styles/theme";
import GlobalStyle from "../styles/GlobalStyles";
import { Header, SEO } from "../components";

const DetailsPageLayout = ({ children, title, description, url, image }) => {
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
      {children}
    </ThemeProvider>
  );
};

export default DetailsPageLayout;
