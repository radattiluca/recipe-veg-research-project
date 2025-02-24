import React from "react";
import { Link } from "react-router-dom";

import {
  LeftContainer,
  RightContainer,
  CenterContainer,
  FooterLink,
} from "./styleComponents/Footer.style";

function Footer({ className, children }) {
  return (
    <div className={className}>
      <LeftContainer>
        <FooterLink>Privacy Policy</FooterLink>
      </LeftContainer>
      <CenterContainer>
        <FooterLink>Informativa Cookie©</FooterLink>
      </CenterContainer>
      <RightContainer>
        <FooterLink>Eggplant Srl</FooterLink>
      </RightContainer>
    </div>
  );
}

export default Footer;

//componente footer che verrà trasposrtato in tutte le pagine
