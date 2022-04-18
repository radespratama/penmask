import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.global}, sans-serif;
    scroll-behavior: smooth;
    position: relative;
  }
  
  html, body, header, footer {
    background-color: ${({ theme }) => theme.global.main};
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%
  }
`;
