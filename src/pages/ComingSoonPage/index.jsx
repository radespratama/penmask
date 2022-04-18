import React from "react";
import { Container, Tabs, TitleH1 } from "@devplayhouse/rdx";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <Container justifyContent="center">
      <Tabs>
        <TitleH1 fontSize={50}>Coming Soon</TitleH1>
        <Link style={{ textAlign: 'center', marginTop: '12px', color: "#FFF" }} to="/">Back to home</Link>
      </Tabs>
    </Container>
  );
}
