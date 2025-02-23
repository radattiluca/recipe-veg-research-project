import styled from "styled-components";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

export const StyledNavbar = styled(Navbar)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
  padding: ${(props) => props.padding};
  grid-template-columns: ${(props) => props.gridTemplateColumns};
  align-items: ${(props) => props.alignItems};
  position: relative;
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
  padding-top: 4px;

  @media (min-width: 700px) {
    padding-left: 30px;
  }
  @media (min-width: 1000px) and (max-width: 1500px) {
  }

  @media (min-width: 1500px) {
  }
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;

  @media (min-width: 700px) {
    padding-right: 30px;
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

  @media (max-width: 700px) {
    display: none;
  }
  @media (min-width: 1000px) and (max-width: 1500px) {
    &:hover {
      transition: all 0.5s ease-in-out;
      border-bottom: 1px solid #9b111e;
    }
  }

  @media (min-width: 1500px) {
    &:hover {
      transition: all 0.5s ease-in-out;
      border-bottom: 1px solid #9b111e;
    }
  }
`;

export const LogoEgg = styled.img`
  width: 35px;
`;

export const SpanLogo = styled.span`
  color: #e2ddd0;
  position: absolute;
  top: 30px;
  left: 45px;
  font-size: 1.7em;
  font-weight: 300;

  @media (min-width: 700px) {
    left: 65px;
  }

  @media (min-width: 1000px) and (max-width: 1500px) {
    &:hover {
      transition: all 1s ease-in-out;
      border-bottom: 1px solid #9b111e;
    }
  }

  @media (min-width: 1500px) {
    &:hover {
      transition: all 1s ease-in-out;
      border-bottom: 1px solid #9b111e;
    }
  }
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: #e2ddd0;
  font-size: 40px;
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 100vh;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtends = styled(Link)`
  display: flex;
  color: #e2ddd0;
  text-decoration: none;
  font-size: x-large;
  margin: 10px;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const EggLinkToHome = styled(Link)`
  color: #e2ddd0;
  text-decoration: none;
`;
