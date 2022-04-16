import styled from "styled-components";

export const TextArea = styled.textarea`
  font-family: "monaco, monospace";
  border: none;
  width: 100%;
  height: 16rem;
  font-size: 13px;
  background: #ecf0f1;
  color: #34495e;

  &:focus {
    outline: none;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  font-weight: 700;
  text-align: center;
  letter-spacing: -3px;
  color: ${({ theme }) => theme.global.white};
  width: 31.25rem;
  margin-inline: auto;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const TextStyleSpan = styled.span`
  background-image: ${({ theme }) => theme.global.gradientFirst};
  background-repeat: no-repeat;
  background-size: 100% 0.45em;
  background-position: 0 88%;
  transition: all 0.25s ease-in;

  &:hover {
    cursor: default;
    background-size: 100% 1.25em;
    background-position: 0 80%;
  }
`;

export const Block = styled.section`
  margin: 1rem 0;
  padding: 10px;
  background-color: white;
  max-width: 100%;
  min-height: 100vh;
`;

export const DropZone = styled.div`
  
`;
