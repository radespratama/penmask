import React from "react";
import styled from "styled-components";
import {
  Header as Headers,
  LayoutWrapper,
  BoxLayout,
  ImgBrand,
  A,
} from "@devplayhouse/rdx";
import "bootstrap-icons/font/bootstrap-icons.css";

const Icons = styled.i`
  ::before {
    font-size: 1.5rem;
  }
`;

export default function Header() {
  return (
    <Headers position="fixed">
      <LayoutWrapper maxWidth={80} p={16}>
        <BoxLayout isPosition="flex-start">
          <ImgBrand sizeImg={2.7} src="/static/penmask.svg" alt="Penmask logo" />
        </BoxLayout>
        <BoxLayout isPosition="flex-end">
          <A mr={12} href="/comingsoon">More tools</A>
          <A href="https://github.com/radespratama/penmask.git" target="_blank">
            <Icons className="bi bi-github" />
          </A>
        </BoxLayout>
      </LayoutWrapper>
    </Headers>
  );
}
