import styled from "styled-components";

export const PenmaskFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 80rem;
  margin-inline: auto;
  margin-bottom: 1rem;
`;

export const BoxLayout = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.isPosition};
  flex: 1 100%;
  padding: 0 1rem;
`;

export const FtLink = styled.a`
  color: ${({ theme }) => theme.global.white};
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

export const FtH3 = styled.h3`
  color: ${({ theme }) => theme.global.white};
  font-size: 16px;
  font-weight: 400;
  user-select: none;
`;
