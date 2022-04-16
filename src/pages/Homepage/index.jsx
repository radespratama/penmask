import React from "react";
// import _ from "lodash";
// import tinycolor from "tinycolor2";
// import { imageToRGBMatrix, imageToRawData } from "canvas-image-utils";

import Layout from "components/Layout";
import { Title, TextStyleSpan, Block } from "./homepage.style";

export default function Homepage() {
  return (
    <Layout>
      <Title>
        Convert any 
        {' '}
        <TextStyleSpan>image</TextStyleSpan>
        {' '}
        into a pure CSS
      </Title>
      <Block>Jel</Block>
    </Layout>
  );
}
