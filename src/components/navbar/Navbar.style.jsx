// #e2ddd0 color Background

// #3e303f color Navbar

// #d4a86f color Titles

import styled from "styled-components";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

//import image
import plantHoverLink from "../../assets/image/plantLink.png";

export const StyledNavbar = styled(Navbar)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
  padding: ${(props) => props.padding};
  align-items: ${(props) => props.alignItems};
  position: sticky;
  top: 0;
  z-index: 300;

  @media (min-width: 1000px) and (max-width: 1500px) {
  }

  @media (min-width: 1500px) {
  }
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 10px;

  @media (min-width: 700px) {
    padding-left: 30px;
  }
  @media (min-width: 1000px) and (max-width: 1500px) {
    padding-left: 80px;
  }

  @media (min-width: 1500px) {
    padding-left: 80px;
  }
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
  padding-top: 10px;

  @media (min-width: 700px) {
    padding-right: 30px;
  }

  @media (min-width: 1000px) and (max-width: 1500px) {
    padding-right: 80px;
  }

  @media (min-width: 1500px) {
    padding-right: 80px;
  }
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;
export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: #e2ddd0;
  text-decoration: none;
  font-size: x-large;
  margin: 10px;
  width: max-content;
  cursor: pointer;

  @media (max-width: 767px) {
    display: none;
  }
  @media (min-width: 1000px) and (max-width: 1500px) {
    &:hover {
      transition: all 0.8s ease;
      border-bottom: 10px solid transparent;
      border-image-repeat: round;
      border-image-slice: 40;
      border-image-source: url(${plantHoverLink});
    }
  }

  @media (min-width: 1500px) {
    &:hover {
      transition: all 0.8s ease;
      border-bottom: 10px solid transparent;
      border-image-repeat: round;
      border-image-slice: 40;
      border-image-source: url(${plantHoverLink});
    }
  }
`;

export const LogoEgg = styled.img`
  width: 120px;
`;

export const OpenLinksButton = styled.button`
  width: 50px;
  height: 43px;
  background: none;
  background-color: #312831;
  border-radius: 5px;
  border: none;
  color: #e2ddd0;
  font-size: 35px;
  cursor: pointer;
  padding-bottom: 44px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 100vh;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavbarLinkExtends = styled(Link)`
  display: flex;
  color: #e2ddd0;
  text-decoration: none;
  font-size: x-large;
  margin: 10px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const EggLinkToHome = styled(Link)`
  color: #e2ddd0;
  text-decoration: none;
  cursor: pointer;
`;
