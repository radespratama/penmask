import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.4s all ease;
  width: 100%;
  z-index: 10;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 3px 1px 10px rgba(0, 0, 0, 0.1);
`;

export const Nav = styled.nav`
  position: relative;
  max-width: 67.5rem;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

export const BoxLayout = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.isPosition};
  flex: 1 100%;
  margin: 0 1rem;

  @media screen and (max-width: 960px) {
    margin: 0;
  }
`;

export const NavBrand = styled.img`
  height: 2.25rem;
`;

export const NavLink = styled.a`
  cursor: pointer;
  margin: 0 0.8rem;
  color: #fff;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
  @media screen and (max-width: 960px) {
    font-size: 14px;
    margin: 0 0.7rem;
  }
`;

export const Icons = styled.i`
  ::before {
    font-size: 1.5rem;
  }
`