import React from "react";
import { useState, useContext } from "react";
import { RecipesContext, RecipesProvider } from "../stores/RecipesContext";
import {
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
  LogoEgg,
  SpanLogo,
  OpenLinksButton,
  NavbarLinkExtends,
  EggLinkToHome,
} from "./styleComponents/Navbar.style";

import logoEgg from "../assets/logo-egg.png";

function Navbar({ className, children }) {
  const { extendNavbar, setExtendNavbar } = useContext(RecipesContext);

  function handleClickExtendNavbar() {
    console.log(extendNavbar);
    setExtendNavbar((curr) => !curr);
  }

  return (
    <div className={className}>
      <NavbarInnerContainer>
        <LeftContainer>
          <EggLinkToHome to="/">
            <LogoEgg src={logoEgg} alt="egg" />
            <SpanLogo>Plant</SpanLogo>
          </EggLinkToHome>
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/">Contact Us</NavbarLink>
            <NavbarLink to="/">About Us</NavbarLink>
            <OpenLinksButton onClick={handleClickExtendNavbar}>
              {extendNavbar ? "✖️" : "☰"}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtends to="/">Home</NavbarLinkExtends>
          <NavbarLinkExtends to="/">Contact Us</NavbarLinkExtends>
          <NavbarLinkExtends to="/">About Us</NavbarLinkExtends>
        </NavbarExtendedContainer>
      )}
    </div>
  );
}

export default Navbar;

//componente navbar che verrà trasposrtato in tutte le pagine
