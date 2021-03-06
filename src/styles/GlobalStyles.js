import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary-0: #207490;
    --color-primary-1: #21AAE2;
    --color-primary-2: #5CC7EB;
    --color-dark-0: #191924;
    --color-dark-1: #27283F;
    --color-dark-2: #53556E;
    --color-light-0: #EDEDF2;
    --color-light-1: #F6F6F9;
    --color-light-2: #FFFFFF;
    --color-success-0: #04A660;
    --color-success-1: #07C270;
    --color-success-2: #3ADA8A;
    --color-error-0: #BE1918;
    --color-error-1: #F43A3C;
    --color-error-2: #F56161;
    --color-warning-0: #E27A00;
    --color-warning-1: #FF8E00;
    --color-warning-2: #FDA642;
    --color-bg-0: #EDEDF2;
    --color-bg-1: #F6F6F9;
    --color-bg-2: #FFFFFF;
    --color-text-0: #191924;
    --color-text-1: #27283F;
    --color-text-2: #53556E;
    --color-accent-2: #5CC7EB;
    --color-accent-1: #21AAE2;
    --color-accent-0: #207490;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--color-bg-0);
    color: var(--color-text-0);
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.body};
    line-height: ${({ theme }) => theme.lineHeights.body};
  }

  p {
    margin: 1rem 0 2rem 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: ${({ theme }) => theme.lineHeights.heading};
    margin: ${({ theme }) => theme.space.xl}px 0;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.h1};
  }
  
  h2 {
    font-size: ${({ theme }) => theme.fontSizes.h2};
  }
  
  h3 {
    font-size: ${({ theme }) => theme.fontSizes.h3};
  }
  
  h4 {
    font-size: ${({ theme }) => theme.fontSizes.h4};
  }
  
  h5 {
    font-size: ${({ theme }) => theme.fontSizes.h5};
  }
  
  h6 {
    font-size: ${({ theme }) => theme.fontSizes.h6};
  }

  a {
    text-decoration: none;
    color: var(--color-accent-0);
    transition: all ease-in-out 0.3s;

    &:hover {
      color: var(--color-accent-1);
    }
  }

  img {
    filter: ${({ theme }) =>
      theme.name === "dark" ? `brightness(0.8) contrast(1.2)` : ""};
  }

  blockquote {
    p {
      margin: 0;
    }

    margin: ${({ theme }) => theme.space.lg}px 0;
    padding: 0 ${({ theme }) => theme.space.lg}px;
    border-left: 4px solid ${({ theme }) => theme.colors.primary0};
    font-size: ${({ theme }) => theme.fontSizes.h5};
    font-style: italic;
    line-height: ${({ theme }) => theme.lineHeights.heading};
  }

  .gatsby-highlight {
    overflow: auto;
    margin: ${({ theme }) => theme.space.lg}px 0;
    
    pre {
      border-radius: 8px;
    }
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      font-size: ${({ theme }) => theme.fontSizes.body};
      font-weight: ${({ theme }) => theme.fontWeights.normal};
      line-height: ${({ theme }) => theme.lineHeights.list};

      ::before {
        color: var(--color-text-0);
        content: '???';
        margin-right: ${({ theme }) => theme.space.md}px;
      }
    }
  }

  .post-body {
    p {
      margin: 2rem 0;

      :first-child {
        margin-top: 0;
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      scroll-margin-top: 76px;
    }
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    cursor: pointer;
    background-color: var(--color-light-2);
    transition: all ease-in-out 0.3s;
    
    :hover {
      background-color: var(--color-accent-1);
    }
    
    :active {
      background-color: var(--color-accent-2);
    }
  }
`;

export default GlobalStyle;
