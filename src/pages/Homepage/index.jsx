/* eslint-disable default-case */
import React, { useState } from "react";
import tinycolor from "tinycolor2";
import _ from "lodash";
import { imageToRGBMatrix, imageToRawData } from "canvas-image-utils";

import Layout from "components/Layout";
import {
  Title,
  TextStyleSpan,
  BlockContainer,
  Block,
  Text,
  Dropzone,
  InputFile,
  Tabs,
  Inline,
  Tab,
  ImagePreview,
  Textarea,
} from "./homepage.style";

function compressColor(rgb) {
  const hex = tinycolor(rgb).toHexString();

  switch (hex) {
    case "#c0c0c0":
      return "silver";
    case "#808080":
      return "gray";
    case "#800000":
      return "maroon";
    case "#ff0000":
      return "red";
    case "#800080":
      return "purple";
    case "#008000":
      return "green";
    case "#808000":
      return "olive";
    case "#000080":
      return "navy";
    case "#008080":
      return "teal";
  }
  return hex[1] === hex[2] && hex[3] === hex[4] && hex[5] === hex[6]
    ? "#" + hex[1] + hex[3] + hex[5]
    : hex;
}

export default function Homepage() {
  const [outputType, outputTypeSet] = useState("SHADOW");
  const [originalSize, originalSizeSet] = useState(0);
  const [base64Data, base64DataSet] = useState("");
  const [rgbMatrix, rgbMatrixSet] = useState(null);
  const [loadingImage, loadingImageSet] = useState(false);

  function onFileSelected(event) {
    event.stopPropagation();
    event.preventDefault();

    const dt = event.dataTransfer;
    const files = dt ? dt.files : event.target.files;
    const file = files[0];

    originalSizeSet(file.size);

    const fr = new window.FileReader();

    loadingImageSet(true);

    fr.onload = async (data) => {
      const base64src = data.currentTarget.result;
      const dataMatrix = await imageToRGBMatrix(base64src, { size: 200 });
      const canvasRawData = await imageToRawData(base64src, {
        size: 1080,
        crop: false,
      });

      base64DataSet(canvasRawData.ctx.canvas.toDataURL("image/jpeg", 0.75));
      rgbMatrixSet(dataMatrix);
      loadingImageSet(false);
    };
    fr.readAsDataURL(file);
  }

  function onDragOver(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  let scale = 1;

  const masterShadow = _.map(rgbMatrix, (row, rowIndexSrc) => {
    return _.map(row, (col, colIndexSrc) => {
      const i = colIndexSrc * scale;
      const j = rowIndexSrc * scale;

      const color = compressColor(`rgb(${col.r},${col.g},${col.b})`);

      const scaleCompensation = scale !== 1 ? ` 0 ${scale / 2}px` : ``;

      return `${color} ${j ? j + "px" : 0} ${
        i ? i + "px" : 0
      }${scaleCompensation}`;
    }).join(",");
  }).join(",");

  const handleFocus = (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.target.select();
  };

  return (
    <Layout>
      <Title>
        Convert any <TextStyleSpan>image</TextStyleSpan> to pure css
      </Title>
      <BlockContainer>
        <Block>
          <Text textColor="#FFF" mb={16}>
            Let's get started :
          </Text>
          <Dropzone
            onDrop={onFileSelected}
            onDragOver={onDragOver}
            onDragEnter={onDragOver}
          >
            {loadingImage ? (
              <Text textColor="#FFF">Processing...</Text>
            ) : (
              <Tabs>
                <Text textColor="#FFF">Drop an image here</Text>
                <Text textColor="#FFF">or click to select</Text>
              </Tabs>
            )}
            <InputFile
              type="file"
              onChange={onFileSelected}
              multiple
              accept="image/*"
              aria-label="Drop an image here, or click to select"
            />
          </Dropzone>
        </Block>
        <Block>
          <Text textColor="#FFF" mb={16}>
            Result :
          </Text>
          {rgbMatrix && (
            <>
              <Inline>
                <Tab
                  active={outputType === "SHADOW"}
                  key={"SHADOW"}
                  onClick={() => {
                    outputTypeSet("SHADOW");
                  }}
                >
                  <Text textColor="#1F2937">{"Pure CSS"}</Text>
                </Tab>
                <Tab
                  active={outputType === "BASE64"}
                  key={"BASE64"}
                  onClick={() => {
                    outputTypeSet("BASE64");
                  }}
                >
                  <Text textColor="#1F2937">{"Base64"}</Text>
                </Tab>
              </Inline>
              {outputType === "BASE64" && (
                <>
                  <Tabs>
                    <Text textColor="#fff" mb={12} mt={12} LHeight={25}>
                      <strong>The result (base64).</strong>{" "}
                      {
                        "This is your image tag a base64 output. The entire image file is embedded inside the `<img>` tag using base64, so no need external hosting is needed."
                      }
                    </Text>
                    <ImagePreview src={base64Data} alt="Preview" />
                    <Textarea
                      onChange={() => {}}
                      className="code"
                      value={`<img src="${base64Data}" />`}
                    />
                    <Text textColor="#fff" mt={6} mb={3}>
                      Output size (resized):{" "}
                      {base64Data.length.toLocaleString()}b
                    </Text>
                    <Text textColor="#fff" mt={3}>
                      Original size: {Number(originalSize).toLocaleString()}b
                    </Text>
                  </Tabs>
                </>
              )}
              {outputType === "SHADOW" && (
                <>
                  <Tabs>
                    <Text textColor="#FFF" mb={12} mt={12} LHeight={25}>
                      <strong>The result (pure CSS).</strong> This is your pure
                      CSS (and single div) image, enjoy! This output was created
                      by resizing and setting each pixel as a box-shadow of a
                      single pixel div, so no `img` tag or `background-image` is
                      needed. This can result in huge outputs, and the use of
                      this output is not recommended for production unless there
                      is no other option.
                    </Text>
                    <div
                      style={{
                        height: 1,
                        width: 1,
                        boxShadow: masterShadow,
                        marginBottom: rgbMatrix[0].length * scale,
                        marginRight: rgbMatrix.length * scale,
                      }}
                    />
                    <Textarea
                      onFocus={handleFocus}
                      onChange={() => {}}
                      className="code"
                      value={`<div style="margin-right: ${
                        rgbMatrix[0].length * scale
                      }px; margin-bottom: ${
                        rgbMatrix.length * scale
                      }px; height: 1px; width: 1px; box-shadow: ${masterShadow}"></div>`}
                    />
                    <Text textColor="#fff" mt={6} mb={3}>
                      Output size (resized):{" "}
                      {masterShadow.length.toLocaleString()}b
                    </Text>
                    <Text textColor="#fff" mt={3}>
                      Original size: {Number(originalSize).toLocaleString()}b
                    </Text>
                  </Tabs>
                </>
              )}
            </>
          )}
        </Block>
      </BlockContainer>
    </Layout>
  );
}
