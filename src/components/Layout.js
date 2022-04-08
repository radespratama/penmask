import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

const MainWrapper = styled.main`
  flex-grow: 1;
  flex-wrap: wrap;
  min-height: 100vh;
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
