import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.global}, sans-serif;
  }

  html, body, header, footer {
    background-color: #1f2937;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%
  }
`;
