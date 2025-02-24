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
  OpenLinksButton,
  NavbarLinkExtends,
  EggLinkToHome,
} from "./styleComponents/Navbar.style";

import logoEgg from "../assets/EggPlant-Logo.png";

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
          </EggLinkToHome>
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/contactUs">Contact Us</NavbarLink>
            <NavbarLink to="/aboutUs">About Us</NavbarLink>
            <OpenLinksButton onClick={handleClickExtendNavbar}>
              {extendNavbar ? "x" : "☰"}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtends to="/">Home</NavbarLinkExtends>
          <NavbarLinkExtends to="/contactUs">Contact Us</NavbarLinkExtends>
          <NavbarLinkExtends to="/aboutUs">About Us</NavbarLinkExtends>
        </NavbarExtendedContainer>
      )}
    </div>
  );
}

export default Navbar;

//componente navbar che verrà trasposrtato in tutte le pagine
