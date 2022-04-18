import React from "react";
import {
  PenmaskHeader,
  Nav,
  BoxLayout,
  NavBrand,
  NavLink,
  Icons,
} from "./header.style";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Header() {
  return (
    <PenmaskHeader>
      <Nav>
        <BoxLayout isPosition="flex-start">
          <NavBrand src="/static/penmask.svg" alt="Penmask logo" />
        </BoxLayout>
        <BoxLayout isPosition="flex-end">
          <NavLink href="/">More tools</NavLink>
          <NavLink
            href="https://github.com/radespratama/penmask.git"
            target="_blank"
          >
            <Icons className="bi bi-github" />
          </NavLink>
        </BoxLayout>
      </Nav>
    </PenmaskHeader>
  );
}
