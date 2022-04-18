import styled from "styled-components";

export const Title = styled.h1`
  font-size: 50px;
  font-weight: 700;
  text-align: center;
  letter-spacing: -3px;
  color: ${({ theme }) => theme.global.white};
  width: 29rem;
  margin-inline: auto;

  @media screen and (max-width: 960px) {
    width: 70%;
    font-size: 40px;
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

export const BlockContainer = styled.section`
  margin: 1rem 0;
  padding: 10px 5px;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 2fr;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

export const Block = styled.div`
  margin: 0 5px;
  /* background-color: aqua; */

  @media screen and (max-width: 960px) {
    margin: 5px 0;
  }
`;

export const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  user-select: none;
`;

export const Text = styled.h4`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.textColor};
  margin-top: ${(props) => props.mt}px;
  margin-bottom: ${(props) => props.mb}px;
  line-height: ${(props) => props.LHeight}px;
`;

export const Textarea = styled.textarea`
  font-family: "monaco, monospace";
  border: none;
  width: 100%;
  height: 256px;
  font-size: 13px;
  line-height: 1.309;
  padding: 16px 18px;
  background: #ecf0f1;
  color: #000;

  &:focus {
    outline: none;
  }
`;

export const Dropzone = styled.div`
  height: 9.375rem;
  flex: 1;
  max-width: 20rem;
  display: flex;
  text-align: center;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  border: 2px dashed #fff;
  color: #1f2937;
  padding: 0;
  cursor: pointer;

  & span {
    width: 100%;
    cursor: pointer;
  }

  &:hover {
    border-color: gray;
  }
`;

export const InputFile = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  cursor: pointer;
`;

export const Inline = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const Tab = styled.button`
  user-select: none;
  padding: 10px;
  cursor: pointer;
  border: none;
  background-color: ${(props) =>
    props.active ? "#fff" : props.info ? "#1F2937" : "#C4C4C4"};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  margin-left: 5px;
`;

export const ImagePreview = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  margin-bottom: 12px;
`;
