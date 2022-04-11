import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

const MainWrapper = styled.main`
  flex-grow: 1;
  flex-wrap: wrap;
  min-height: 100vh;
  max-width: 67.5rem;
  margin-inline: auto;
  padding-top: 4.5rem;
`;

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </>
  );
}
