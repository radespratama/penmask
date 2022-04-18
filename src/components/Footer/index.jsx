import React from "react";
import { LayoutWrapper, BoxLayout, H3, A } from "@devplayhouse/rdx";

export default function Footer() {
  return (
    <footer>
      <LayoutWrapper maxWidth={80} mb={10}>
        <BoxLayout isPosition="flex-start">
          <H3 fontSize={16} isColor="#FFF">
            Build using <A href="https://reactjs.org/">⚡React</A>
          </H3>
        </BoxLayout>
        <BoxLayout isPosition="flex-end">
          <H3 fontSize={16} isColor="#FFF">
            @Penmask {new Date().getFullYear()}
          </H3>
        </BoxLayout>
      </LayoutWrapper>
    </footer>
  );
}
