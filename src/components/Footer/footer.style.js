import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 67.5rem;
  margin-inline: auto;
  margin-bottom: 1rem;
`;

export const BoxLayout = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.isPosition};
  flex: 1 100%;
`;

export const FooterLink = styled.a`
  color: #fff;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

export const FooterText = styled.h3`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  user-select: none;
`;

