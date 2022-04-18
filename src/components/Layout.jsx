import React from "react";
import { ContainerLayout } from "@devplayhouse/rdx";

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <ContainerLayout>{children}</ContainerLayout>
      <Footer />
    </>
  );
}
