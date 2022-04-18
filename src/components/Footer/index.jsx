import React from "react";
import { BoxLayout, PenmaskFooter, FtLink, FtH3 } from "./footer.style";

export default function Footer() {
  return (
    <PenmaskFooter>
      <BoxLayout isPosition="flex-start">
        <FtH3>
          Build using <FtLink href="https://reactjs.org/">⚡React</FtLink>
        </FtH3>
      </BoxLayout>
      <BoxLayout isPosition="flex-end">
        <FtH3>@Penmask {new Date().getFullYear()}</FtH3>
      </BoxLayout>
    </PenmaskFooter>
  );
}
